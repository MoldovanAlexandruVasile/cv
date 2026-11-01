type ClearSkillButtonProps = {
  onClear: () => void;
};

export const ClearSkillButton = ({ onClear }: ClearSkillButtonProps) => (
  <button className="text-accent underline" onClick={onClear}>
    Clear
  </button>
);
