// Define AngularJS app and controller
angular.module('devGrowthApp', [])
  .controller('DevGrowthCtrl', function() {
    var c = this;

    // ========================================
    // DATA MODEL
    // ========================================
    c.newEntry = { title: '', description: '' };
    c.entries = [];

    // ========================================
    // METHODS
    // ========================================
    c.addEntry = function() {
      if (!c.newEntry.title || !c.newEntry.description) {
        return;
      }

      var entry = {
        id: generateId(),
        title: c.newEntry.title,
        description: c.newEntry.description,
        date: new Date(),
        timestamp: Date.now()
      };

      c.entries.push(entry);

      // Reset form
      c.newEntry = { title: '', description: '' };

      console.log('Entry added:', entry);
      console.log('Total entries:', c.entries.length);
    };

    // ========================================
    // HELPERS
    // ========================================
    function generateId() {
      return 'entry_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    // ========================================
    // INIT
    // ========================================
    (function init() {
      console.log('DevGrowth Tracker initialized');
      console.log('Controller scope:', c);
    })();
  });
