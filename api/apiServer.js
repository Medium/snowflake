// @flow
import type { Api, Files, MasterConfig } from './apiType';
import type { MilestoneMap } from '../constants'
import { tracks } from '../constants'
import { UserData } from '../models/UserData'
import _ from 'lodash';


const apiServer: Api = {
    submitFiles(files: Files) {
        let formdata = new FormData();
        _.forEach(files, (file, key) => {
            formdata.append(key, file);
        });
        formdata.append("department", "ENGINEERING");
        // update endpoint
        return fetch("http://localhost:8080/api/performancematrix/config", {
            body: formdata,
            method: 'POST',
        }).then(response => undefined)
    },
    getMasterConfig(dept: string) {
        return fetch(`http://localhost:8080/api/performancematrix/config/${dept}`)
            // stubbed
            .then(res => res.json())
            .then(data => {
                return sanitizeData(data);
            })
    },
    fetchUsers() {
        return fetch(`http://localhost:8080/users`)
            .then(res => res.json())
            .then(users => users.map(user => user.email))
    },
    fetchUser(user: string) {
        return fetch(`http://localhost:8080/api/performancematrix/fetchuser/${user}`)
            .then(res => res.json())
            .then(data => {
                if (_.isEmpty(data)) {
                    return {};
                }

                return {
                    ...data,
                    ratings: parseRating(data.ratings)
                }
            })
    },
    saveUser(ratings: MilestoneMap,  currentRole: string, username: string) {
        const formData = new FormData();
        formData.append("userId", username);
        formData.append("curRole", currentRole);
        formData.append("ratings", JSON.stringify(ratings));

        return fetch(`http://localhost:8080/api/performancematrix/saveuser`, {
            method: 'POST',
            header: {'Content-Type': 'application/json' },
            body: formData
        })
        .then()
    }
};

const parseRating = (ratings: string) => {
    const jsonRating = JSON.parse(ratings);
    return _.mapValues(jsonRating, strVal => +strVal)
}



// Not sure what this column is, but we don't want it
const BLACKLIST = ['Ratings']

const sortByCategory = (ratings) => {
    return _(ratings)
        .groupBy(rating => rating.category)
        .reduce((memo, group) => {
        group.forEach(entry => {
            memo[entry.displayName] = entry;
        })
        return memo;
        }, {})
}

const sanitizeData = ({ rating, role }: MasterConfig) => {
    // sometimes the category milestones doesn't have any data - so we filter these out
    const newRating = _.chain(rating)
        .mapValues(category => {
            return {
                ...category,
                milestones: category.milestones.filter(milestone => milestone.summary),
            }
        })
        .pickBy((category, categoryName) => category.milestones.length > 0 && !BLACKLIST.includes(categoryName))
        .value();
    return { rating: sortByCategory(newRating), role }
}

export default apiServer;


