
var neo4j = require("../build/node/neo4j");

describe('driver', function() {
  it('should expose sessions', function() {
    // Given
    var driver = neo4j.driver("neo4j://localhost");

    // When
    var session = driver.session();

    // Then
    expect( session ).not.toBeNull();
    driver.close();
  });
});