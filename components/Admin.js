import React from 'react'
import WeDeploy from 'wedeploy';

const URL = 'https://database-wmdetest.wedeploy.io';
const PATH = 'users';

const hashToState = (hash: String) => {
    if (!hash) return null
    const hashValues = hash.split('#')[1].split(',')
    if (!hashValues) return null
    const result = {
        name: (hashValues[16]) ? decodeURI(hashValues[16]) : null,
        title: (hashValues[17]) ? decodeURI(hashValues[17]) : null,
        url: hash
    }
    
    return result;
}

let test = null;

class Admin extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
        
        this.state = {
            users: []
        }
    }
    
    componentDidMount() {
        test = window;
        WeDeploy.data(URL).get(PATH).then(response => {
            this.setState({users: response});
		}).catch(error => {
			console.error(error);
		});
        
		WeDeploy.data(URL).watch(PATH).on('changes', response => {
			this.setState({users: response});
		}).on('fail', error => {
			console.log(error);
        });
    }
    
    getItemId(name) {
        let id = -1;
        
        this.state.users.forEach((item) => {
            if (item.state.name == name) {
                console.log(item.id);
                id = item.id;
            }
        });
        
        return id;
    }
    
    handleClickSave() {
        const state = hashToState(window.location.hash);
        const id = this.getItemId(state.name);
        
        if (id == -1) {
            if (!confirm(`Do you want to save the user ${state.name}?`)) return;
            
            WeDeploy.data(URL).create(PATH, {
                state
            }).then(data => {
                console.log(data);
            }).catch(error => {
                console.error(error);
            });
        } else {
            if (!confirm(`Do you want to update the user ${state.name}?`)) return;
            
            WeDeploy.data(URL).update(`${PATH}/${id}`, {
                state
            }).then(function(data) {
                console.log(data);
            });
        }
    }
    
    handleClickNew() {
        window.location.href = '';
        document.querySelector('.name-input').value = '';
    }
    
    handleClickChangeUrl({target}) {
        window.location.href = `/?time=${Date.now()}?${target.dataset.url}`;
    }
    
    handleClickRemove({target}) {
        if (!confirm(`Do you want to delete the user?`)) return;
        
        const id = target.dataset.id;
        
        WeDeploy.data(URL).delete(`${PATH}/${id}`);
    }
    
    renderList() {
        
        const {users} = this.state;
        
        return (
            users.map((item, index) => {
                return (
                    <li key={`${index}-item`}>
                    <div
                    data-url={item.state.url}
                    onClick={this.handleClickChangeUrl.bind(this)}
                    >
                    {item.state.name}
                    </div>
                    
                    <button data-id={item.id} onClick={this.handleClickRemove.bind(this)}>
                    remove
                    </button>
                    </li>
                );
            })
        );
    }
    
    hasAdminRights() {
        if (test !== null && test.location !== null ) {
            var hashes = test.location.href.slice(test.location.href.indexOf('?') + 1).split('&');
            var argumentsJson = {};
            var hash;
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                argumentsJson[hash[0]] = hash[1];
            }
            
            if (argumentsJson !== null && argumentsJson.admin == 'a1234') {
                return true;
            }
        }
        return false;
        
    }
    render() {
        
        var sideBarView;
        //if (this.hasAdminRights()) {
            sideBarView = <ul className="sidebar"> <div className="sidebar-header">SAVED USERS</div>{this.renderList()}</ul>;
        //}
        return (
            <div>
            <style>
            {`
            .container {
                width: 1000px;
                margin: auto;
            }
            
            .sidebar {
                position: fixed;
                right: 0;
                width: 150px;
                top: 0;
                height: 100%;
                background-color: #3f0f73;
                margin: 0;
                padding: 0;
            }
            
            .sidebar .sidebar-header {
                padding: 1rem;
                font-size: .6rem;
                color: rgba(255, 255, 255, .8);
                background-color: rgba(0, 0, 0, .2);
            }
            
            .sidebar li {
                display: flex;
                justify-content: space-between;
                padding: .5rem 1rem;
                color: rgba(255, 255, 255, .4);
                font-size: .8rem;
            }
            
            .sidebar li:hover, .sidebar li.active {
                background-color: rgba(255, 255, 255, .1);
                color: rgba(255, 255, 255, .8);
                cursor: pointer;
            }
            
            .sidebar li:hover button {
                opacity: 1;
            }
            
            .sidebar li button {
                opacity: 0;
                background-color: transparent;
                border-width: 0;
                padding: 0;
                cursor: pointer;
                color: rgba(255, 255, 255, .4);
            }
            
            .sidebar li button:hover {
                color: rgba(255, 255, 255, .8);
            }
            
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                padding: 1rem;
                width: 100%;
                background-color: #fff;
                box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);
            }
            
            .footer .btn {
                margin-right: 1rem;
            }
            
            .btn {
                padding: 1rem;
                color: #000;
                text-transform: uppercase;
                border-width: 0;
                border-radius: 4px;
                font-weight: bold;
            }
            
            .btn.btn-default {
                background-color: #f0f0f0;
            }
            
            .btn.btn-primary {
                background-color: #061F3B;
                color: #fff;
            }
            `}
            </style>
            
            {sideBarView}
            
            <div className="">
            <div className="container">
            <button className="btn btn-primary" onClick={this.handleClickSave.bind(this)}>save snowflake</button>
            <button className="btn btn-default" onClick={this.handleClickNew.bind(this)}>reset snowflake</button>
            <div style={{padding:'100px'}}></div>
            </div>
            </div>
            
            </div>
        );

    } 
    
}

export default Admin;