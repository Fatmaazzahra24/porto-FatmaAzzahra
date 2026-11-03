import { Workflow, PenTool, Database, ScanSearch, MessagesSquare, Users, ListChecks, Puzzle, Lightbulb, RefreshCw, Clock } from 'lucide-react';

const skillIcons = {
  workflow: Workflow,
  design: PenTool,
  database: Database,
  analysis: ScanSearch,
  communication: MessagesSquare,
  team: Users,
  project: ListChecks,
  problem: Puzzle,
  thinking: Lightbulb,
  adaptability: RefreshCw,
  time: Clock,
};

export default function SkillPill({ skill, duplicate = false }) {
  const Icon = skillIcons[skill.icon];

  return (
    <li className={`skill-pill${duplicate ? ' skill-pill--duplicate' : ''}`} aria-hidden={duplicate || undefined}>
      {skill.logo ? <img src={`/icons/skills/${skill.logo}.svg`} alt="" width="22" height="22" /> : Icon && <Icon size={21} strokeWidth={1.6} aria-hidden="true" />}
      <span>{skill.name}</span>
    </li>
  );
}
