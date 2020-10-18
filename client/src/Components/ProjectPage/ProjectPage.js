import React from "react";
import "./ProjectPage.css";

{
  /*Project Page/ Links to github Repositories. Straight link to Github? */
}

function ProjectPage() {
  return (
    <div id="ProjectPage">
      <h1>Projects Page</h1>
      {/* Will Probably Need som sort of Flex Wrap Container Here*/}
      <div id="buttonWrap">
      <div id="Link1">
        <button>
          <a
            href="https://github.com/BurlingtonCodeAcademy/remock-brendan802"
            id="Remock"
          >
            Remock Repository
          </a>
        </button>
      </div>
      <div id="Link2">
        <button>
          <a
            href="https://github.com/BurlingtonCodeAcademy/guess-the-number-brendan802"
            id="GuessNumber"
          >
            Guess The Number Repository
          </a>
        </button>
      </div>
      <div id="Link3">
        <button>
          <a
            href="https://github.com/BurlingtonCodeAcademy/zorkington-emily-brendan"
            id="Zorkington"
          >
            Zorkington Repository
          </a>
        </button>
      </div>
      <div id="Link4">
        <button>
          <a
            href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-matheus-brendan"
            id="TicTacToe"
          >
            TicTacToe Repository
          </a>
        </button>
      </div>
      </div>
    </div>
  );
}

export default ProjectPage;
