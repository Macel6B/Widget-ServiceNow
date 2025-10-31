# DevGrowth Tracker

> A ServiceNow widget for tracking daily learning progress - Built while mastering OOP and AngularJS

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![Sprint](https://img.shields.io/badge/sprint-1-green)
![Status](https://img.shields.io/badge/status-in_development-yellow)

---

## Table of Contents

- [About The Project](#about-the-project)
- [Learning Objectives](#learning-objectives)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Development Approach](#development-approach)
- [Current Sprint](#current-sprint)
- [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [What I've Learned](#what-ive-learned)
- [Contact](#contact)

---

## About The Project

**DevGrowth Tracker** is a personal learning widget built in ServiceNow to help developers track their daily learning journey. This project serves dual purposes:

1. **A functional tool** to log concepts learned, code snippets, and daily progress
2. **A learning platform** to practice OOP principles, AngularJS, Git workflows, and Scrum methodology

### Why This Project?

- Practice **Object-Oriented Programming** in a real application
- Master **AngularJS** within ServiceNow's framework
- Build **professional Git habits** with daily commits
- Apply **Scrum methodology** as a solo developer
- Create something **useful** while learning

---

## Learning Objectives

### Technical Skills
- [ ] JavaScript OOP concepts (classes, inheritance, encapsulation)
- [ ] AngularJS fundamentals (controllers, services, directives)
- [ ] ServiceNow platform development (widgets, server scripts, tables)
- [ ] RESTful API integration
- [ ] CSS/SCSS styling

### Professional Practices
- [ ] Git version control workflows
- [ ] Agile/Scrum methodology
- [ ] Code documentation
- [ ] Iterative development
- [ ] Technical decision documentation

---

## Tech Stack

**Frontend:**
- AngularJS 1.x
- HTML5
- CSS3/SCSS
- Bootstrap (ServiceNow)

**Backend:**
- ServiceNow Server Scripts
- GlideRecord API
- ServiceNow REST API

**Tools:**
- Git & GitHub
- ServiceNow Personal Developer Instance
- VS Code (or your preferred editor)

---

## Project Structure
```
devgrowth-tracker/
├── README.md                          # Project documentation
├── backlog.md                         # Product backlog with user stories
├── daily-log.md                       # Daily development journal
│
├── docs/                              # Documentation
│   ├── sprint-1/
│   │   ├── planning.md
│   │   └── retrospective.md
│   ├── oop-concepts-learned.md       # OOP concepts with examples
│   └── technical-decisions.md        # Architecture decisions log
│
├── widget/                            # Widget source code
│   ├── client-controller.js          # AngularJS controller
│   ├── server-script.js              # Server-side logic
│   ├── template.html                 # HTML template
│   ├── css-style.scss                # Styles
│   └── widget-definition.json        # Widget metadata
│
└── scripts/                           # ServiceNow scripts
    ├── update-sets/                  # Update set exports
    └── table-creation.js             # Table definitions
```

---

## Development Approach

### Scrum Framework (Solo Developer Edition)

**Sprint Duration:** 1 week (7 days)

**Daily Commitment:** 45 minutes

**Ceremonies:**
- **Sprint Planning** (Sunday): Select user stories, define goals
- **Daily Development** (Mon-Fri): 45 min coding sessions
- **Sprint Review** (Saturday): Demo & tag release
- **Retrospective** (Sunday): Reflect & improve

### Git Workflow
```bash
main (stable releases)
 └── develop (integration branch)
      ├── feature/US-XXX (user story branches)
      └── bugfix/issue-name (bug fixes)
```

**Commit Convention:**
- `feat:` New feature
- `fix:` Bug fix
- `refactor:` Code refactoring
- `docs:` Documentation
- `style:` Formatting
- `test:` Adding tests

---

## Current Sprint

### Sprint 1: Foundation (Week 1)
**Goal:** Create a visible widget that can accept and display learning entries

**Status:** In Progress

| User Story | Status | Days |
|------------|--------|------|
| US-001: Basic widget structure | Todo | 2 |
| US-002: Add learning entry form | Todo | 3 |

**OOP Focus:** Constructor functions, basic encapsulation

---

## Installation

### Prerequisites
- ServiceNow Personal Developer Instance (PDI)
- Git installed locally
- GitHub account
- Code editor (VS Code recommended)

### Setup Steps

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR_USERNAME/devgrowth-tracker.git
   cd devgrowth-tracker
```

2. **ServiceNow Setup**
   - Log into your PDI
   - Navigate to: Service Portal > Widget Editor
   - Create new widget: `DevGrowth Tracker`
   - Widget ID: `devgrowth_tracker`

3. **Copy code from `/widget` folder to ServiceNow**

4. **Create Update Set**
   - Name: `DevGrowth Tracker - Sprint X`
   - Capture all changes

---

## Usage

### Adding a Learning Entry

1. Navigate to your Service Portal page
2. Add the DevGrowth Tracker widget
3. Enter title and description of what you learned
4. Click "Add Entry"
5. View your learning history below

*(Screenshots will be added as features develop)*

---

## Roadmap

### Completed
- [x] Project setup
- [x] GitHub repository created

### Current Sprint (Sprint 1)
- [ ] Basic widget rendering
- [ ] Learning entry form
- [ ] Display entries

### Upcoming Sprints

**Sprint 2:** Data Persistence
- [ ] Save entries to ServiceNow table
- [ ] Load last 5 entries
- [ ] Basic CRUD operations

**Sprint 3:** OOP Core Concepts
- [ ] Entry categorization
- [ ] Refactor with proper classes
- [ ] Implement design patterns

**Sprint 4+:** Advanced Features
- [ ] Code snippet storage
- [ ] Statistics dashboard
- [ ] Tagging system
- [ ] Search & filter
- [ ] Entry type inheritance
- [ ] Streak tracking

See [backlog.md](backlog.md) for complete product backlog.

---

## What I've Learned

*This section will be updated after each sprint*

### Sprint 1
**OOP Concepts:**
- Constructor functions
- Object creation patterns
- Encapsulation basics

**AngularJS:**
- Controller setup
- Two-way data binding
- Scope management

**ServiceNow:**
- Widget architecture
- Client/Server script interaction

---

## Progress Tracking

| Metric | Count |
|--------|-------|
| Total Sprints Completed | 0 |
| User Stories Completed | 0 |
| Commits Made | 1 |
| Days Coded | 0 |
| OOP Concepts Learned | 0 |

*Updated: October 31, 2024*

---

## Documentation

- [Product Backlog](backlog.md) - All user stories
- [Daily Log](daily-log.md) - Day-by-day progress
- [OOP Concepts](docs/oop-concepts-learned.md) - Concepts with code examples
- [Technical Decisions](docs/technical-decisions.md) - Architecture choices

---

## Contributing

This is a personal learning project, but feedback and suggestions are welcome!

1. Fork the project
2. Create a feature branch
3. Submit a pull request with your suggestions

---

## Contact

**Your Name**
- GitHub: [@Macel6B](https://github.com/Macel6B)
- LinkedIn: [Macel Flores Bayardi](https://www.linkedin.com/in/macel-flores-bayardi/)
- Email: macel.6b@gmail.com

---

## Acknowledgments

- ServiceNow Community
- AngularJS Documentation
- Clean Code by Robert C. Martin
- Scrum Guide

---

## License

This project is for educational purposes.

---

*Built with ☕ and determination | One commit at a time*
