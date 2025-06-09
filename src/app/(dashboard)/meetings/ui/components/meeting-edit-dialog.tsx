import { ResponsiveDialog } from "@/components/responsive-dialog";
import { MeetingGetOne } from "@/modules/meetings/types";
import { MeetingForm } from "@/modules/meetings/views/components/meeting-dialog-form";
interface UpdateMeetingProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingGetOne;
}

export const EditMeetingDialog = ({
  open,
  onOpenChange,
  initialValues,
}: UpdateMeetingProps) => {
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Update meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponsiveDialog>
  );
};
