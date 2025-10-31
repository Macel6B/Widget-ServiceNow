# Product Backlog - DevGrowth Tracker

**Last Updated:** October 31, 2024  
**Product Owner:** Macel 6B

---

## Product Vision

"A personal learning companion that helps developers track daily progress, concepts learned, and code snippets—built while learning OOP and AngularJS."

---

## Backlog Items

### Priority 1: MVP (Sprint 1-2)

#### US-001: Basic Widget Structure
**As a** developer  
**I want** to create a basic widget structure  
**So that** I can see it render in ServiceNow

**Acceptance Criteria:**
- [ ] Widget appears on Service Portal page
- [ ] Widget displays title "DevGrowth Tracker"
- [ ] Basic styling applied

**OOP Focus:** AngularJS controller structure  
**Story Points:** 3  
**Sprint:** 1

---

#### US-002: Add Learning Entry Form
**As a** user  
**I want** to add a learning entry with title and description  
**So that** I can track what I learned today

**Acceptance Criteria:**
- [ ] Form with two fields: title (required) and description (required)
- [ ] Submit button that captures data
- [ ] Entry displays below form after submission
- [ ] Form clears after successful submission

**OOP Focus:** LearningEntry constructor, data model  
**Story Points:** 5  
**Sprint:** 1

---

### Priority 2: Persistence (Sprint 2)

#### US-003: Save Entries to Database
**As a** user  
**I want** my entries saved in ServiceNow  
**So that** they persist between sessions

**OOP Focus:** Service layer pattern, data access object  
**Story Points:** 5  
**Sprint:** 2

---

#### US-004: Load Recent Entries
**As a** user  
**I want** to view my last 5 learning entries  
**So that** I can see my recent progress

**OOP Focus:** Separation of concerns  
**Story Points:** 3  
**Sprint:** 2

---

### Priority 3: Organization (Sprint 3)

#### US-005: Categorize Entries
**As a** user  
**I want** to categorize entries by topic  
**So that** I can organize my learning

**Categories:** JavaScript, AngularJS, OOP, ServiceNow, Other

**OOP Focus:** Factory pattern, enums  
**Story Points:** 3  
**Sprint:** 3

---

## Future Enhancements (Backlog)

- US-006: Refactor with OOP classes
- US-007: Code snippet storage
- US-008: Statistics dashboard
- US-009: Tagging system
- US-010: Search functionality
- US-011: Entry type inheritance
- US-012: Streak counter

---

**Legend:**
- Story Points: Fibonacci (1, 2, 3, 5, 8)
- Priority: 1 (Must Have), 2 (Should Have), 3 (Nice to Have)
