import { FC } from "react";

type EditNavProps = {
  onSave: () => void;
  onCancel: () => void;
};

export const EditNav: FC<EditNavProps> = ({
  onSave,
  onCancel,
}): JSX.Element => (
  <ul className="flex flex-row-reverse items-center gap-2">
    <li>
      <button onClick={onCancel}>Cancel</button>
    </li>
    <li>
      <button onClick={onSave}>Save</button>
    </li>
  </ul>
);
