const game = {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        // ... other players
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        'Bismack Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10,
        },
        // ... other players
      },
    },
  };
  
  // Function to find a player's points
  function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : null;
  }
  
  // Function to find a player's shoe size
  function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player ? player.shoe : null;
  }
  
  // Function to find a team's colors
  function teamColors(teamName) {
    const team = findTeam(teamName);
    return team ? team.colors : null;
  }
  
  // Function to return an array of team names
  function teamNames() {
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to find player numbers for a given team
  function playerNumbers(teamName) {
    const team = findTeam(teamName);
    if (team) {
      const playerNumbers = [];
      for (const playerName in team.players) {
        playerNumbers.push(team.players[playerName].number);
      }
      return playerNumbers;
    }
    return null;
  }
  
  // Function to find player stats by name
  function playerStats(playerName) {
    const player = findPlayer(playerName);
    return player ? player : null;
  }
  
  // Function to find the player with the largest shoe size and return their rebounds
  function bigShoeRebounds() {
    let largestShoeSize = 0;
    let playerWithLargestShoe = null;
  
    for (const teamName in game) {
      const team = game[teamName];
      for (const playerName in team.players) {
        const player = team.players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = playerName;
        }
      }
    }
  
    if (playerWithLargestShoe) {
      return game.home.players[playerWithLargestShoe].rebounds;
    }
  
    return null;
  }
  
  // Helper function to find a player by name
  function findPlayer(playerName) {
    for (const teamName in game) {
      const team = game[teamName];
      const player = team.players[playerName];
      if (player) {
        return player;
      }
    }
    return null;
  }
  
  // Helper function to find a team by name
  function findTeam(teamName) {
    if (game.home.teamName === teamName) {
      return game.home;
    } else if (game.away.teamName === teamName) {
      return game.away;
    }
    return null;
  }
  
  // Example usages:
  console.log(numPointsScored('Alan Anderson')); // 22
  console.log(shoeSize('Reggie Evans')); // 14
  console.log(teamColors('Brooklyn Nets')); // ['Black', 'White']
  console.log(teamNames()); // ['Brooklyn Nets', 'Charlotte Hornets']
  console.log(playerNumbers('Brooklyn Nets')); // [0, 30, ...]
  console.log(playerStats('Bismack Biyombo')); // Player's stats object
  console.log(bigShoeRebounds()); // Rebounds of the player with the largest shoe size
  