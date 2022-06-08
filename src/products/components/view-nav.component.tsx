import { FC } from 'react';

type ViewNavProps = {
  onEdit: () => void;
  onBack: () => void;
};

export const ViewNav: FC<ViewNavProps> = ({ onEdit, onBack }): JSX.Element => (
  <ul className="flex flex-row-reverse items-center gap-2">
    <li>
      <button onClick={onBack}>
        Back
      </button>
    </li>
    <li>
      <button onClick={onEdit}>
        Edit
      </button>
    </li>
  </ul>
);
