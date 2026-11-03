# Skills & Tools

Content follows the Skills brief supplied by the owner on 3 November 2026.
There are 14 technical skills, 7 tools, and 7 professional skills. React and
Leadership are deliberately excluded as requested. No proficiency ratings.

- Data: `src/data/skills.js`.
- Section: `src/sections/Skills.jsx`, after Experience.
- Components: `SkillsMarquee` and `SkillPill`.
- Styling: `src/styles/skills.css`.
- Technical and professional rows move left to right; tools move right to left.
- Two identical groups, each containing two copies of its skill list, fill the
  track with no gaps. Each group has equal width, including its trailing gap.
  Animating half of the total track width yields a continuous loop.
- Only the first copy of each skill is exposed to assistive technology.
- Hover and keyboard focus pause an individual row; a pause/resume control
  pauses all rows. Touch devices retain automatic motion.
- Reduced motion disables animation, hides copies and the animation control,
  and wraps the original skills so every item remains visible.
- SVGs load locally and eagerly so offscreen moving pills have their icons ready.

## Icon sources

Brand SVGs are stored in `public/icons/skills/`:

- Devicon v2.17.0 (MIT), source pattern:
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/{name}/{name}-original.svg`.
  HTML/CSS use html5/css3; VS Code uses vscode. License stored alongside icons.
- Word and Excel: Simple Icons 11.15.0 (CC0), sources:
  `https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/microsoftword.svg`
  and `https://cdn.jsdelivr.net/npm/simple-icons@11.15.0/icons/microsoftexcel.svg`.
  License stored alongside icons. Brand names/logos remain their owners' marks.
- Capabilities without an official brand logo use Lucide React icons.
