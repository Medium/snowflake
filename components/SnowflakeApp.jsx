// @flow

import React from 'react';
import TrackSelector from './TrackSelector';
import NightingaleChart from './NightingaleChart';
import KeyboardListener from './KeyboardListener';
import Track from './Track';
import Wordmark from './Wordmark';
import LevelThermometer from './LevelThermometer';
import {
  eligibleTitles, trackIds, coerceMilestone,
} from '../data/constants';
import PointSummaries from './PointSummaries';
import type { Milestone, MilestoneMap, TrackId } from '../data/constants';
import TitleSelector from './TitleSelector';

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId,
}

const emptyState = (): SnowflakeAppState => ({
  name: '',
  title: '',
  milestoneByTrack: {
    MOBILE: 0,
    WEB_CLIENT: 0,
    FOUNDATIONS: 0,
    SERVERS: 0,
    PROJECT_MANAGEMENT: 0,
    COMMUNICATION: 0,
    CRAFT: 0,
    INITIATIVE: 0,
    CAREER_DEVELOPMENT: 0,
    ORG_DESIGN: 0,
    WELLBEING: 0,
    ACCOMPLISHMENT: 0,
    MENTORSHIP: 0,
    EVANGELISM: 0,
    RECRUITING: 0,
    COMMUNITY: 0,
  },
  focusedTrackId: 'MOBILE',
});

const defaultState = (): SnowflakeAppState => ({
  name: 'Cersei Lannister',
  title: 'Staff Engineer',
  milestoneByTrack: {
    MOBILE: 1,
    WEB_CLIENT: 2,
    FOUNDATIONS: 3,
    SERVERS: 2,
    PROJECT_MANAGEMENT: 4,
    COMMUNICATION: 1,
    CRAFT: 1,
    INITIATIVE: 4,
    CAREER_DEVELOPMENT: 3,
    ORG_DESIGN: 2,
    WELLBEING: 0,
    ACCOMPLISHMENT: 4,
    MENTORSHIP: 2,
    EVANGELISM: 2,
    RECRUITING: 3,
    COMMUNITY: 0,
  },
  focusedTrackId: 'MOBILE',
});

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null;
  const result = defaultState();
  const hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[16]) result.name = decodeURI(hashValues[16]);
  if (hashValues[17]) result.title = decodeURI(hashValues[17]);
  return result;
};

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null;
  const values = trackIds.map((trackId) => state.milestoneByTrack[trackId])
    .concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(',');
};

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props);
    this.state = emptyState();
  }

  componentDidMount() {
    const state = hashToState(window.location.hash);
    if (state) {
      this.setState(state);
    } else {
      this.setState(defaultState());
    }
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state);
    if (hash) window.location.replace(`#${hash}`);
  }

  render() {
    const {
      milestoneByTrack,
      name,
      title,
      focusedTrackId,
    } = this.state;

    const { setState } = this;

    const handleTrackMilestoneChange = (trackId: TrackId, milestone: number) => {
      milestoneByTrack[trackId] = coerceMilestone(milestone);

      const titles = eligibleTitles(milestoneByTrack);
      const newTitle = titles.indexOf(title) === -1 ? titles[0] : title;

      setState({ milestoneByTrack, focusedTrackId: trackId, title: newTitle });
    };

    const shiftFocusedTrack = (delta: number) => {
      let index = trackIds.indexOf(focusedTrackId);
      index = (index + delta + trackIds.length) % trackIds.length;
      setState({ focusedTrackId: trackIds[index] });
    };

    const setFocusedTrackId = (trackId: TrackId) => {
      const index = trackIds.indexOf(trackId);
      const newFocusedTrackId = trackIds[index];
      setState({ focusedTrackId: newFocusedTrackId });
    };

    const shiftFocusedTrackMilestoneByDelta = (delta: number) => {
      const prevMilestone = milestoneByTrack[focusedTrackId];
      let milestone = prevMilestone + delta;
      if (milestone < 0) milestone = 0;
      if (milestone > 5) milestone = 5;
      handleTrackMilestoneChange(focusedTrackId, milestone);
    };

    const setTitle = (newTitle: string) => {
      const titles = eligibleTitles(milestoneByTrack);
      setState({ title: titles.indexOf(newTitle) === -1 ? titles[0] : newTitle });
    };

    return (
      <main>
        <style jsx global>
          {`
          body {
            font-family: Helvetica;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}
        </style>
        <div style={{ margin: '19px auto 0', width: 142 }}>
          <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
            <Wordmark />
          </a>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <form>
              <input
                type="text"
                className="name-input"
                value={name}
                onChange={(e) => this.setState({ name: e.target.value })}
                placeholder="Name"
              />
              <TitleSelector
                milestoneByTrack={milestoneByTrack}
                currentTitle={title}
                setTitleFn={setTitle}
              />
            </form>
            <PointSummaries milestoneByTrack={milestoneByTrack} />
            <LevelThermometer milestoneByTrack={milestoneByTrack} />
          </div>
          <div style={{ flex: 0 }}>
            <NightingaleChart
              milestoneByTrack={milestoneByTrack}
              focusedTrackId={focusedTrackId}
              handleTrackMilestoneChangeFn={handleTrackMilestoneChange}
            />
          </div>
        </div>
        <TrackSelector
          milestoneByTrack={milestoneByTrack}
          focusedTrackId={focusedTrackId}
          setFocusedTrackIdFn={setFocusedTrackId}
        />
        <KeyboardListener
          selectNextTrackFn={() => shiftFocusedTrack(1)}
          selectPrevTrackFn={() => shiftFocusedTrack(-1)}
          increaseFocusedMilestoneFn={() => shiftFocusedTrackMilestoneByDelta(1)}
          decreaseFocusedMilestoneFn={() => shiftFocusedTrackMilestoneByDelta(-1)}
        />
        <Track
          milestoneByTrack={milestoneByTrack}
          trackId={focusedTrackId}
          handleTrackMilestoneChangeFn={handleTrackMilestoneChange}
        />
        <div style={{ display: 'flex', paddingBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            Made with
            {' '}
            <span role="img" aria-label="love">❤️</span>
            {' '}
by
            {' '}
            <a href="https://medium.engineering" target="_blank" rel="noopener noreferrer">Medium Eng</a>
.
            Learn about the
            {' '}
            <a href="https://medium.com/s/engineering-growth-framework" target="_blank" rel="noopener noreferrer">this version of our growth framework</a>
            {' '}
and
            <a href="https://medium.engineering/engineering-growth-at-medium-4935b3234d25" target="_blank" rel="noopener noreferrer">what we do currently</a>
.
            Get the
            <a href="https://github.com/Medium/snowflake" target="_blank" rel="noopener noreferrer">source code</a>
.
            Read the
            <a href="https://medium.com/p/85e078bc15b7" target="_blank" rel="noopener noreferrer">terms of service</a>
.
          </div>
        </div>
      </main>
    );
  }
}

export default SnowflakeApp;
