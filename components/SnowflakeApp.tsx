import TrackSelector from "./TrackSelector";
import SpecialtySelector from "./SpecialtySelector";
import NightingaleChart from "./NightingaleChart";
import Track from "./Track";
import LevelThermometer from "./LevelThermometer";
import {
  MilestoneStates,
  Quest,
  SpecialtyId,
  TrackId,
} from "../constants/tracks";
import PointSummaries from "./PointSummaries";
import { Milestone, MilestoneMap } from "../constants/tracks";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import TitleSelector from "./TitleSelector";
import {
  getInitialMilestones,
  getInitialMilestoneStates,
  getTracksIncludingSpecialties,
} from "../logic/tracks";
// import NotesDrawer from "./NotesDrawer/NotesDrawer";

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap;
  trackStates: MilestoneStates;
  quests: Quest[];
  name: string;
  title: string;
  specialties: SpecialtyId[];
};

const hashToState = (hash: string): SnowflakeAppState => {
  const state = emptyState();
  if (!hash) return state;
  try {
    const hashValue = hash.split("#")[1] || btoa("{}");
    const hashState = JSON.parse(atob(hashValue));
    Object.assign(state, hashState);
    return state;
  } catch {
    return state;
  }
};

const emptyState = (): SnowflakeAppState => {
  return {
    name: "",
    title: "",
    specialties: [],
    milestoneByTrack: getInitialMilestones(),
    trackStates: getInitialMilestoneStates(),
    quests: [],
  };
};

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null;
  const query = { ...state };
  return btoa(JSON.stringify(query));
};

const simpleStateReducer = (
  oldState: SnowflakeAppState,
  newState: Partial<SnowflakeAppState>
) => ({
  ...oldState,
  ...newState,
});

const initialState = emptyState();

const SnowflakeApp = function SnowflakeApp() {
  const [state, setState] = useReducer(simpleStateReducer, initialState);

  const [canUpdateState, setCanUpdateState] = useState<boolean>(false);

  const accountedTracks = useMemo(
    () => getTracksIncludingSpecialties(state.specialties),
    [state.specialties]
  );

  const setTitle = useCallback(
    (title: string) => {
      setState({ title });
    },
    [state]
  );

  const setSpecialty = useCallback((specialties: SpecialtyId[]) => {
    setState({ specialties });
  }, []);

  const setMilestoneForTrack = useCallback(
    (trackId, milestone) => {
      const milestoneByTrack = state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      setState({ milestoneByTrack });
    },
    [state]
  );
  const getMilestoneForTrack = useCallback(
    (trackId) => {
      const milestoneByTrack = state.milestoneByTrack;
      return milestoneByTrack[trackId];
    },
    [state]
  );

  const { focusedTrackId, handleTrackMilestoneChange, setFocusedTrackId } =
    useFocusedTrack({
      trackIds: accountedTracks,
      getMilestoneForTrack,
      setMilestoneForTrack,
    });

  useEffect(() => {
    if (canUpdateState) {
      const hash = stateToHash(state);
      if (hash) window.location.replace(`#${hash}`);
    }
  }, [state, canUpdateState]);

  useEffect(() => {
    setState(
      hashToState(
        typeof window === "undefined" ? undefined : window.location.hash
      )
    );
    setCanUpdateState(true);
  }, []);

  return (
    <main>
      <style jsx global>{`
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
        .name-input:hover,
        .name-input:focus {
          border-bottom: 2px solid #ccc;
          outline: 0;
        }
        a {
          color: #888;
          text-decoration: none;
        }
      `}</style>
      <div style={{ margin: "19px auto 0", width: 142 }}>
        <a href="https://thndr.app/" target="_blank">
          <img
            style={{ width: "100%" }}
            src="https://thndr.app/static/greenLogo-7835b20c31a89b662f424859ef2f260e.png"
          />
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <form>
            <input
              type="text"
              className="name-input"
              value={state.name}
              onChange={(e) => setState({ name: e.target.value })}
              placeholder="Name"
            />
            <TitleSelector
              milestoneByTrack={state.milestoneByTrack}
              specialties={state.specialties}
              currentTitle={state.title}
              setTitleFn={(title) => setTitle(title)}
            />
            <SpecialtySelector
              specialties={state.specialties}
              setSpecialtyFn={setSpecialty}
            />
          </form>
          <PointSummaries
            milestoneByTrack={state.milestoneByTrack}
            specialties={state.specialties}
          />
          <LevelThermometer
            milestoneByTrack={state.milestoneByTrack}
            specialties={state.specialties}
          />
        </div>
        <div style={{ flex: 0 }}>
          <NightingaleChart
            milestoneByTrack={state.milestoneByTrack}
            focusedTrackId={focusedTrackId}
            title={state.title}
            accountedTracks={accountedTracks}
            handleTrackMilestoneChangeFn={(track, milestone) =>
              handleTrackMilestoneChange(track, milestone)
            }
          />
        </div>
      </div>
      <TrackSelector
        milestoneByTrack={state.milestoneByTrack}
        focusedTrackId={focusedTrackId}
        accountedTracks={accountedTracks}
        setFocusedTrackIdFn={setFocusedTrackId}
      />
      {/* <NotesDrawer trackStates={state.trackStates} trackId={focusedTrackId} /> */}

      <Track
        milestoneByTrack={state.milestoneByTrack}
        trackId={focusedTrackId}
        handleTrackMilestoneChangeFn={(track, milestone) =>
          handleTrackMilestoneChange(track, milestone)
        }
      />
    </main>
  );
};

export default SnowflakeApp;

function useFocusedTrack({
  trackIds,
  getMilestoneForTrack,
  setMilestoneForTrack,
}) {
  const [focusedTrackId, setFocusedTrackId] = useState<TrackId>(
    TrackId.SOFTWARE_ENGINEERING
  );

  function shiftFocusedTrack(trackId: TrackId, delta: number) {
    let index = trackIds.indexOf(trackId);
    index = (index + delta + trackIds.length) % trackIds.length;
    setFocusedTrackId(trackIds[index]);
  }

  function shiftFocusedTrackMilestoneByDelta(trackId: TrackId, delta: number) {
    let prevMilestone = getMilestoneForTrack(trackId);
    let milestone = (prevMilestone + delta) as Milestone;
    if (milestone < 0) milestone = 0;
    if (milestone > 5) milestone = 5;
    handleTrackMilestoneChange(trackId, milestone);
  }
  useKeyboardListener({
    trackId: focusedTrackId,
    shiftFocusedTrack,
    shiftFocusedTrackMilestoneByDelta,
  });

  const handleTrackMilestoneChange = (
    trackId: TrackId,
    milestone: Milestone
  ) => {
    setMilestoneForTrack(trackId, milestone);
    setFocusedTrackId(trackId);
  };

  return {
    focusedTrackId,
    handleTrackMilestoneChange,
    setFocusedTrackId,
  };
}

function useKeyboardListener(props: {
  trackId: TrackId;
  shiftFocusedTrackMilestoneByDelta: (trackId: TrackId, delta: number) => void;
  shiftFocusedTrack: (trackId: TrackId, delta: number) => void;
}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, { capture: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [props.trackId]);
  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case "ArrowUp":
        props.shiftFocusedTrackMilestoneByDelta(props.trackId, 1);
        e.preventDefault();
        break;
      case "ArrowRight":
        props.shiftFocusedTrack(props.trackId, 1);
        break;
      case "ArrowDown":
        props.shiftFocusedTrackMilestoneByDelta(props.trackId, -1);
        e.preventDefault();
        break;
      case "ArrowLeft":
        props.shiftFocusedTrack(props.trackId, -1);
        break;
    }
  };
}
