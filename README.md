# Coding Convention:
```yaml
  Klassen: 		PascalCase
  Funktionen: 	camelCase
  Variablen: 	snake_case
  Konstanten: 	FAT_SNAKE_CASE
```


Client Menüs
-MainMenu
-LobbyScreen
-Chessboard


User -> Socket
Lobbies -> Users & Game
Game -> Chessboard
Chessboard -> MoveValidator & MovingPiece


Client
Input:
    Whole Chessboard
    New Moves

Package Server => Client
    {
        name: "status",
        active: {
            player: "id",
            rotation: "cards",
        }
        pieces: [
            { p: "bp1", tag: "trap", coords: {x: 0, y: 7}} 
            // For movment calculation
        ],
        fields: {
            00: { forceField: true }
            // Information about field modifiers. For move validator.
        },
        cards: [
            // Users current cards
        ]
        moves: [
            // Log
        ]
    }

Package Client => Server
// Moving Packet
    {
        name: "move",
        piece: "bk",
        destination: {
            x: 0,
            y: 4
        }
    }
// Card Packet
    {
        name: "card",
        card: "cardName",
        cardPayload: {
            p1: "",
            p2: "",
        }
    }