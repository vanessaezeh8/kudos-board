# kudos-board
## Unit Assignment: Kudos Board

Submitted by: **Vanessa Onyinye Ezeh**

Deployed Application (**required**): [Kudos Board Deployed Site](https://kudos-board-frontend-mjq5.onrender.com/)

### Application Features

#### CORE FEATURES

##### Home Page

- [✅] **Home Page Display**
  - [✅] Home page includes the following features:
    - [✅] Header
    - [✅] Banner
    - [✅] Search bar
    - [✅] List of boards
    - [✅] Footer
- [✅] **Display Boards**
  - [✅] Users can view a list of all boards in a grid view on the home page.
  - [✅] For each board displayed, users can see:
    - [✅] An image/gif
    - [✅] A board title
- [✅] **Filter Boards**
  - [✅] Home page includes navigation bar, drop down, or some other mechanism which allows users to filter boards by the following categories:
    - [✅] All/Home (displays all boards)
    - [✅] Recent (displays the 6 most recently created boards)
    - [✅] Celebration
    - [✅] Thank you
    - [✅] Inspiration
  - [✅] When a category is clicked, boards matching the specified category are displayed.
- [✅] **Search Functionality**
  - [✅] Users can use a search bar to search for boards by title on the home page.
  - [✅] The search bar should include:
    - [✅] Text input field
    - [✅] Submit/Search Button
    - [✅] Clear Mechanism
  - [✅] Boards with a title containing the search query in the text input field are displayed in a grid view when the user:
    - [✅] Presses the Enter key
    - [✅] Clicks the Submit/Search button 
  - [✅] User can delete all text from the text input field. 
  - [✅] When all text is cleared from the text input field, all boards are displayed in a grid view
- [✅] **View Board** 
  - [✅] Users can click on a board in the grid view to navigate to a new page containing that board's details.
- [✅] **Add New Board**
  - [✅] Users can create a new board on the home page.
  - [✅] When creating a new board, users can specify the:
    - [✅] Title (required)
    - [✅] Category (required)
    - [✅] Author (optional)
  - [✅] Items listed as required above must have a value to succesffuly create a new board.
  - [✅] When the board is successfully created, it appears in the grid of boards. 
- [✅] **Delete Board**
  - [✅] User can delete boards on the home page. 
  - [✅] When the board is deleted, the board disappears from the grid of boards. 

##### Board Page

- [✅] **Display Cards**
  - [✅] For a given board, the board's page displays a list of all cards for that board in a grid view.
  - [✅] For each card should displayed, users can see the card's:
    - [✅] Message
    - [✅] Gif 
    - [✅] Number of upvotes
    - [✅] Delete button
- [✅] **Add New Card**
  - [✅] Users can make a new card associated with the current board. 
  - [✅] To successfully create a new card, users must specify the following:
    - [✅] Text message (required).
    - [✅] A gif users can search for and select within the form using the [GIPHY API](https://developers.giphy.com/docs/api/) (required).
  - [✅] Users are given the option to specify the author of the card.
  - [✅] When the new card is successfully created, it appears in the grid of cards. 
- [✅] **Upvote Card**
  - [✅] Users can upvote a card.
  - [✅] Update the vote count on the card tile when a user clicks the upvote icon.
  - [✅] When the upvote icon is clicked the upvote count increases by 1. 
  - [✅] A user can upvote a card multiple times. 
- [✅] **Delete Card**
  - [✅] Users can delete cards.
  - [✅] When the user clicks the delete button for a card, the card disappears from the grid of cards. 
- [✅] **Deployment**
  - [✅] Website is deployed via Render.
  - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: For ease of grading, please use the deployed version of your website when creating your walkthrough. 

####  Stretch Features

- [ ] **Comments**
  - [ ] Users can add comments to cards.
  - [ ] To successfully add a comment, users must specify a text message body.
  - [ ] Users are given the option to specify the author of the comment.
  - [ ] Users can view comments on card in a pop-up modal that displays the card's:
    - [ ] Text message 
    - [ ] Gif
    - [ ] Author (if specified)
    - [ ] A list of the card's comments and each comment's:
      - [ ] Message body
      - [ ] Author (if specified)
  - [ ] Users can add multiple comments to a single card.
- [✅] **Dark Mode** 
  - [✅] Users can toggle between light mode and dark mode using a button displayed on the:
    - [✅] Home Page
    - [✅] Board Pages
  - [✅] When the button is clicked, the color theme switches to the opposite of the current mode. 
  - [✅] When dark mode is enabled:
    - [✅] Text and icons use a light color
    - [✅] The background uses a dark color
    - [✅] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [✅] When light mode is enabled:
    - [✅] Text and icons use a dark color
    - [✅] The background uses a light color
    - [✅] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [✅] The chosen mode (light or dark) persists when navigating from home page to board pages and vice versa.
  - [✅] When the user first visits the site the theme defaults to light mode.
  - [✅] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast in both light and dark mode. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 
- [✅] **Pinned Cards**
  - [✅] Users can pin a card to the top of the board.
  - [✅] A Pin button is displayed on each card.
  - [✅] When the user clicks the Pin button of an unpinned card:
    - [✅] The card moves to the top of the grid view for that board.
    - [✅] There is some visual feedback to indicate a card's pin status (e.g., a pin icon, a border highlight).
    - [✅] The pin action is saved so that the card remains pinned after page refreshes.
  - [✅] When the user clicks the Pin button of a pinned card:
    - [✅] The card returns to its original position in the grid based on its creation time or to the end of the grid.
    - [✅] The card's pin status (e.g., a pin icon or highlight)  is removed.
    - [✅] The unpin action is saved so that the card remains unpinned after page refresh.
  - [✅] Pinned cards always appear at the top of the board, above unpinned cards.
  - [✅] If multiple cards are pinned, they maintain their pinned order based on the time they were pinned.
    - [✅] More recent pins should appear first.
- [✅] The pinned state of a card persists when:
  - [✅] navigating away from and back to the board.
  - [✅] refreshing the page. 
 


### Walkthrough Video

[`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video or gif actually renders and animates when viewing this README. Ensure your walkthrough showcases the presence and/or functionality of all features you implemented above (check them off as you film!). Pay attention to any **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS** checkboxes listed above to ensure graders see the full functionality of your website! (🚫 Remove this paragraph after adding walkthrough video)

`ADD_EMBEDDED_CODE_HERE`](https://www.loom.com/share/d30eaf8de70c4bf1975bf8e1eb81fefb?sid=3b37a163-6710-4ac4-be1a-f9a95cfff084)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?
-I felt unprepared when routing the frontend with the backend

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
- I would watch more videos to understand how routing works

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

- I would finish my backend and start connecting the backend with the frontend 

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Shoutout to My Cohort TAs: Greg, Elikem and Danny
