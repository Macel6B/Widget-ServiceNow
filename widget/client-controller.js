function($scope) {
  /* Widget controller */
  var c = this;

  // ========================================
  // DATA MODEL - OOP Concept: Object Structure
  // ========================================
  
  /**
   * Initialize the new entry object
   * OOP Note: This represents our data model structure
   * Even though it's a simple object now, we're establishing
   * the pattern for our LearningEntry "class"
   */
  c.newEntry = {
    title: '',
    description: ''
  };

  /**
   * Array to store all learning entries
   * OOP Note: This is our in-memory "database" for now
   * In Sprint 2, we'll move this to a proper service layer
   */
  c.entries = [];

  // ========================================
  // METHODS - OOP Concept: Encapsulation
  // ========================================

  /**
   * Add a new learning entry
   * OOP Note: This method encapsulates the logic for adding entries
   * Later we'll refactor this into a proper service class
   */
  c.addEntry = function() {
    // Validation check
    if (!c.newEntry.title || !c.newEntry.description) {
      return;
    }

    // Create entry object (temporary - will become a class in Day 3)
    var entry = {
      id: generateId(),
      title: c.newEntry.title,
      description: c.newEntry.description,
      date: new Date(),
      timestamp: Date.now()
    };

    // Add to array
    c.entries.push(entry);

    // Clear form (reset the model)
    c.newEntry = {
      title: '',
      description: ''
    };

    // Log for debugging
    console.log('Entry added:', entry);
    console.log('Total entries:', c.entries.length);
  };

  // ========================================
  // HELPER FUNCTIONS
  // ========================================

  /**
   * Generate unique ID for entries
   * OOP Note: Utility function - in a real app, this might be 
   * part of a utility service class
   */
  function generateId() {
    return 'entry_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // ========================================
  // INITIALIZATION
  // ========================================
  
  /**
   * Initialize controller
   * OOP Note: Constructor pattern - setup that runs when controller loads
   */
  (function init() {
    console.log('DevGrowth Tracker initialized');
    console.log('Controller scope:', c);
  })();

}