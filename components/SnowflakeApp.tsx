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
      <div style={{ margin: "19px auto 0", width: 127 }}>
        <a href="https://plural.com" target="_blank">
          <svg style={{ width: "100%" }} width="127" height="52" xmlns="http://www.w3.org/2000/svg"><title>Plural</title><g fill="#5988ff" fill-rule="evenodd"><path d="M29.7901356 37.769539c-.6467391 0-1.1758892-.5299065-1.1758892-1.1775699V1.26487001c0-.64766348.5291501-1.17756997 1.1758892-1.17756997h6.1146243c.6467391 0 1.1758892.52990649 1.1758892 1.17756997V36.5919691c0 .6476634-.5291501 1.1775699-1.1758892 1.1775699h-6.1146243zM125.220606 37.769539h-6.114625c-.646739 0-1.175889-.5299065-1.175889-1.1775699V1.26487001c0-.64766348.52915-1.17756997 1.175889-1.17756997h6.114625c.646739 0 1.175889.52990649 1.175889 1.17756997V36.5919691c0 .6476634-.52915 1.1775699-1.175889 1.1775699zM112.598767 14.2181397h-2.116601c-.442134 0-.86859.252785-1.067707.6798504l-1.13293 2.4312894c-1.354154-1.4377344-3.083652-2.5168595-5.092071-3.0557155-6.09534-1.6355662-12.4503159 2.3223249-14.1942381 8.8400962s1.7835888 13.12755 7.8789285 14.7631162c4.2161116 1.1314092 8.5565546-.4135626 11.4092616-3.6306837l.000784.0017271 1.323267 2.8418688c.161489.3454206.471924.5777944.819987.6531588.081528.0172711.164625.0266916.249289.0266916h1.922187c.647523 0 1.227314-.5291214 1.227314-1.1775699V15.3957096c-.000156-.6468784-.579948-1.1775699-1.227471-1.1775699zm-11.211242 16.4859795c-2.5977746 0-4.7035571-2.1087923-4.7035571-4.7102799 0-2.6014875 2.1057825-4.7102798 4.7035571-4.7102798 2.597775 0 4.703557 2.1087923 4.703557 4.7102798 0 2.6014876-2.105782 4.7102799-4.703557 4.7102799zM65.3099878 14.2181397h-6.1146243c-.5534518 0-1.0206719.3721121-1.1429643.8855326-.02195.0863551-.0329249.1758504-.0329249.2684859v11.2302493c0 2.2706689-1.8796982 4.1017117-4.154652 4.1017117-2.2738563 0-4.1212567-1.8293157-4.1543384-4.0985715 0 .0054953-.0003136.0108336-.0003136.016329h-.0003136V15.3957096c0-.3234392-.1222925-.6186167-.3355204-.8337195-.2132279-.2119626-.4954413-.3438504-.8184189-.3438504h-6.1146242c-.6475231 0-1.1978392.5306915-1.1978392 1.1775699v11.0848587c0 5.0714013 3.0181158 9.6497933 7.7075622 11.2104661.0039196-.0014131.0078392-.0029832.0116021-.0045533.0045468.0015701.0089368.0029832.0134835.0045533.202253.067514.4076416.1287476.616166.185271 4.2142304 1.1314092 8.5839917-.4118355 11.406126-3.6255024v.000157l1.3201316 2.8387286c.1959816.420471.6114625.671843 1.047639.6796934.0068986.000157.0130132.000157.0200685.000157h1.9237549c.6459551 0 1.1758892-.5291214 1.1758892-1.1775699V15.3721582c0-.6468784-.5299341-1.1540185-1.1758892-1.1540185zM88.4391026 14.8210555c-.0125428-.0062804-.0235177-.0141309-.0360606-.0204112-.0689855-.0376823-.1411067-.0659439-.2147957-.0879253-2.1542292-.8666914-4.5514755-1.0723737-6.9110933-.4396261-2.0048128.538228-3.731959 1.614684-5.0848588 3.0492782l-.0059578-.0127177-1.1225823-2.4116633c-.1991172-.4270654-.6255731-.6798504-1.0692753-.6798504h-2.12444c-.6459551 0-1.2213569.5306915-1.2213569 1.1775699v21.1962595c0 .6382429.5575283 1.1609269 1.1910974 1.1772559.0100342.000314.0200685.000314.0302595.000314h6.1146243c.6229077 0 1.1101962-.4911252 1.1297944-1.1042466.0001568.000157.0004703.000314.0006271.000471V25.4443067c0-.8272822.2623017-1.5978839.6561462-2.2455474.7386153-1.1521345 2.0292714-1.9151998 3.4986626-1.9151998.498577 0 .9752042.0879252 1.4173385.2480747.0031357.0031402.0078393.0047103.010975.0047103.0470356.0235514.0940711.0408224.1426746.0549533.5111198.1570093 1.0849538-.0549533 1.3624637-.5369719l2.6669168-4.6239248c.106614-.1837009.1567853-.3862429.1567853-.5856448 0-.4082242-.2116601-.8070279-.5879447-1.0237008zM24.7910384 23.1136602c-1.7439222-6.5177713-8.0988982-10.4756624-14.1942378-8.8400962-2.00575357.5382279-3.73352687 1.6151549-5.08689703 3.0500632l-.00517392-.0108337-1.12571799-2.4148034c-.1614888-.3469907-.47192357-.5777944-.81998679-.6531589-.08152832-.017271-.1646245-.0266915-.24772068-.0266915H1.17588927C.52915017 14.2181397 0 14.7480461 0 15.3957096v35.3270991c0 .6476635.52915017 1.1775699 1.17588927 1.1775699H7.2905135c.6467391 0 1.17588927-.5299064 1.17588927-1.1775699V36.7169485c2.50856383 1.4447998 5.50316183 1.9420484 8.41826973 1.1598279 6.0953396-1.6355662 9.6502881-8.2453449 7.9063659-14.7631162zm-7.7014476 2.8801791c0 2.6014876-2.1175414 4.7102799-4.715316 4.7102799h-.0098775c-1.5325757 0-2.89425544-.7324485-3.75500639-1.8669979-.04860343-.0591925-.09642292-.1194841-.14298814-.1807178v-.018213c-.51441236-.756314-.81528323-1.6699513-.81528323-2.6540857 0-2.6068259 2.11613034-4.7200145 4.71923566-4.7200145 2.6031052 0 4.7192356 2.1131886 4.7192356 4.7200145v.0097345z"/></g></svg>
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
