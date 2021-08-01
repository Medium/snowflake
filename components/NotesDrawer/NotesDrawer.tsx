import Drawer from "rc-drawer";
import { useCallback } from "react";
import { useState } from "react";
import { MilestoneStates, TrackId } from "../../constants/tracks";
import { Notes } from "./styles";

type Props = { trackStates: MilestoneStates; trackId: TrackId };
const NotesDrawer: React.FC<Props> = function NotesDrawer({
  trackStates,
  trackId,
}) {
  const notes = trackStates?.[trackId]?.milestone_notes ?? [];
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <button onClick={toggle}>Open</button>
      <Drawer open={open} showMask={false} width="20vw">
        <Notes>Hello</Notes>
      </Drawer>
    </>
  );
};
export default NotesDrawer;
