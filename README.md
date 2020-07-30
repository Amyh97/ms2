# Interactive Front End Milestone Project
## [Visit Prague](https://amyh97.github.io/ms2/)
This is an interactive website that promotes Prague. The website will take different things, such as temperature and cost,  into consideration when it comes to when to go. It features a series of APIs to help pull data from different sources to inform users about the city and the cost of getting there and staying. 

The goals for this website are to:
-	Attract visitors from the UK to Prague
-	Provide users with basic facts and an overview of Prague
-	Allow users to search for flights and hotels to let them know how much it will cost them to visit the city.
-	Show users top attractions in the city and show where they are in relation to each other. 

## UX
This website follows the user’s thought process, they are first faced with a facts page as the landing page for the website, they then get to explore  flight options, then accommodation and finally what there is to do once you’re there. This improves the UX as it follows the user’s thought process of planning their trip away and provides clear sections to look at each element of planning. 

-	As a first-time visitor to Prague I would want to see key facts about the country.
-	As a visitor from the UK I would like to be able to use a converter to get a current currency conversion. 
-	As a user looking to visit Prague, I would like to be able to see the cheapest flight from a chosen UK airport
-	As someone looking to stay in Prague, I would like to see the top few recommended Hotels and pricing for my chosen dates
-	As a first-time visitor to Prague I would like to be able to see where the main attractions 	are.
When designing this website, I used Balsamiq to create wireframes. This meant that that the development process was more streamlined as I knew what elements I wanted to add to the pages. I kept the header, footer and hero image (with the navigation menu in it) the same across the pages to help add continuity to the site, making it more intuitive and encourage the user to explore the site. These have all changed based on feedback given during the development process. In these original plans I was going to present the data in tables. However, these have changed to cards (created using Bootstrap), this made it easier for users to digest the bite sized bits of information and allowed for better UX as the cards could move and adapt to smaller screen sizes.  In addition, it allowed me to add more photos to the website, showing users what there is to see in Prague and add interest and colour to the pages. 

On my landing page I was going to focus on average weather temperatures and general facts about the country. The original plan was to use an API to get the weather information, but as the averages were unlikely to change  and finding an appropriate API was difficult, I decided to add a currency converter, rather than hard coding in the exchange rate (which will change). 
<--- index pic ---> 

The second page that the users see is the flights page. Not only did swapping to cards, from the table improve the overall look of the website, but it also gave me more room to add additional information to the page to help users know how to get from the airport to the city centre. This was due to using the rule of thirds, thus giving me an extra section of the page to add this information. 

<--- flights pic --- >

With the exception of swapping from the table layout to cards, the accommodation page did not change too much in terms of no extra information or APIs added to this page, this is because there was not any beneficial information that I could have added in a third section of the page. Because of this, I decided to ignore the rule of thirds for this page as adding the third section would add meaningless text and give the users an information overload, most of which would not be relevant or useful. 
<--- hotels pic --- >

The original plan for the sights page was to use TripAdvisor to show peoples’ recommendations, however it was difficult to source an API for this (as each attraction would have a unique code to TripAdvisor that it would use to search) and it didn’t fit with the user stories as it would not show where each of these sights were in relation to each other. As I have been to Prague, I knew what sights are recommended and that they are grouped into two main areas either side of the river. So, I swapped to Google maps (as there is very good documentation with the API) and this allowed me to show users where the attractions are on a map by using clusters that become markers the more the user zooms in.  

< --- sights --- >

## Features
### Facts
On the facts page of my website users are drawn to the hero image of the Astronomical clock, on this is a nav bar which used internal hyperlinks to take users to the relevant pages. I used the Bootstrap grid to accomplish the lay out of the cards used on my pages. For this to be effective across different viewports, I had to make use of the display property in CSS to show and hide pictures in order to prevent the images being too small on the smaller viewports. In addition, on a tablet size screen I added a card that is only visible on that screen size and hide two of the cards so that all the weather information is together and readable of all screen sizes. This page contains the simplest of the APIs used. This allows users to enter an amount (in GBP as it is aimed at users from the UK) and it will tell them how many Korunas are in the given number of pounds.
### Flights
This page uses the rule of thirds in the information section of the page (under the hero image). Again, for the best UX across different screen sizes I have made use of the display properties in CSS to hide images so that you can see them more clearly. The first of these three cards just contains hard coded information in it. The middle card contains a form. The values entered in this form are fed into the URL for the API call and allows users to pick dates and outbound airport. The results from the API call and some set text then fill the last card to display the results to the user. 

### Hotels
This page simply has two cards on it. If I were to have followed the rule of thirds, I would have ended up adding unnecessary information that would have given users an information overload. Much like the form on the flights page, the data put in this form is fed into the URL (along with some set information, such as the TripAdvisor code for Prague city) for the API call. This API pulls more data compared to the flights’ API. This API pulls up to thirty hotels based on recommendation. In order to give users an overview of hotel prices in the area on their chosen nights, the results card shows the top three hotels and their prices. 

### Sights

This Page uses the Google maps API, with the marker clusters. I chose the clusters as it then shows users that most of the main attractions are split into two, each side of the river Vltava. This map allows users to zoom in and see where exactly the top attractions are in relation to each other and fit with the user stories for the design of the website. 

### Existing Features
-	This website uses internal hyperlinks, both in the menu and the flag in the top left hand corner of the page(following convention as this is what users expect and improves UX) has an a tag in it that brings users back to index.html. 
-	The website is responsive to the viewport being used to display it. This effects how the pages are rendered. In the case of this website it then means that you see more/ different pictures depending on the screen size. The biggest change caused by this is to the facts page. I wanted to keep the two cards with the weather information together, but on a tablet size screen this wasn’t happening so I created an new card that put it into one larger card that takes the width of the screen so that the data is kept together, making it easier for users to read and interpret. 
-	I have used three forms on this website to help complete URLs for the API calls. In order to make these forms easy for users to complete labels were used alongside the “for” attribute. However, when this was rendered onto the webpage it was wrapping input boxes (of different types are used including text, number and date) so the br tag was used to ensure that this didn’t happen and it was obvious what input field was intended for what data. In addition, I used buttons with different types, submit and reset to help users restart and finish the form. 
-	The main features of this website are the use of APIs. Apart from the Google maps API, they are all called through a generic function. This meant that to make an API call all that was needed was the URL and the headers to be passed through. I used jQuery to help simplify the JavaScript and mainly used the dollar sign and curly braces (${}) and template literals to help populate the URL with the relevant data from the forms. In addition, the currency converter, flights and hotel APIs are all on a click function, so the API call is not made until the user clicks the button. Not only does this restrict the number of API calls made but is also prevents any error messages as the call is not being made before the data is added to the field. Again, to prevent error messages the fields in the form have the “required” attribute so the call cannot be made without all the data to be fed into the URL. 
-	In order to add a bit more interactivity to the website pseudo classes were used. This is found in the menu in the hero image, it underlines and increases the size of the menu option being hovered over. Not only does it add this element of interactivity, but it also helps users see what option they are selecting.
### Features left to implement 
-	On the Google maps API I would like to add images on a “:hover” pseudo class so that when the user hovers over an attraction, an image of the attraction is displayed so that the users can get a better sense of what the city has to offer. 
## Technologies Used
To create this website I used HTML, CSS and JavaScript. I used a few different programs to help me create the overall look of the website and used additional libraries to make the coding process easier. 
-	I used GitPod to write my code in.
-	This project has been deployed through and hosted by GitHub.
-	I used Balsamiq to create the wireframes for my design.
-	To help me create the grid layout, header, and other elements such as the cards and buttons I used Bootstrap 4.
-	I used the jQuery library to help simplify the JavaScript.
-	I embellished the site using icons from Fontawsome. I was able to use them to decorate my pages, adding interest to the pages.
-	I used Roboto and Lobster Two from Google Fonts to style my project. I used one for the headings and one for the text. By only using two fonts I have added continuity to my pages.
-	I used Material Design to help pick my colour scheme and find the hex codes for the colours that I used. Not only did it help me find the hex code for the main colour that I wanted, but it also gave the hex codes for a shade darker and lighter so that I could vary the website, while still having that consistency.
-	In order to create the best UX possible I did not want users to have to wait a long time for the browser to load large image files, so I used Tiny PNG to compress my images so browsers only had to deal with smaller file sizes, therefore load faster.
-	Once I had finished coding I used this HTML Formatter to ensure that my code was properly laid out and easier to read, this site also formats CSS and JavaScript. 
-	I used the W3C validators to help test my code. I used the HTML validator and the CSS validator to ensure that both coding languages were correct.
-	The date picker used in  the forms was created with the use of the JavaScript and CSS files from https://github.com/Pikaday/Pikaday
## Testing 

During the development of the project I constantly looked to the problems section on GitPod to help develop the JavaScript and ensure there were no errors. I then started by testing the usability of the website, I started by testing that the internal links to the various web pages all worked and took me to the correct page. I then checked that all the API calls returned responses as expected, I then ran the HTML and CSS through the W3C validators. When I ran my code through the W3C HTML validator I got a warning about the input type of “date” as this is not supported by all browsers. In order to overcome this, I decided to add a date picker using an external JavaScript file and CSS file. I then found that the API call were not working and returned the following error message “Uncaught (in promise) SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data”.  What I then found was I had formatted the date from the date picker separating the date with a forward slash rather than a dash as the URL required, once this was changed I was getting the expected responses from the API calls.  When I ran the code through the HTML validator again, I only had one remaining warning. On sights.html there is a warning that there is no h2-h6 tag in the main section of the webpage. However, this was done on purpose as the layout of that page did not require one and I did not want to put empty h tags in my code as it would not have done anything. 

After putting my code through the validators, I then went onto test the functionality of the website against the user stories.  The landing page of the website covers the first two user stories listed above, not only does it show them key facts about the city that they are planning to visit, but it also gives them an up to date currency conversion, users are able to input a number of pounds which is then converted. The input type for this is number, to prevent errors in the API call. I then went on to test the third user story, being able to search for cheap flights from a chosen airport. To do this I went to flights.html and selected my dates, chosen airport and click search, this then created the text in the results section of the page. However I did find that on smaller mobile screens there was not enough room to show the date picker and the input field, therefore you were unable to closer the date picker, to overcome this I had to change where the users could click to close the picker. I tried having it so that clicking anywhere on the document closed the picker, which worked until you wanted to open the next picker as you were still clicking on a child of the document, it opened both date pickers, and pushed the rest of the form off the bottom of the page and ruined the UX. In the end I targeted the label for the input field, by clicking on that you close the date picker you had open and would not be affected by opening the next date picker. To test the user story focusing on choosing a hotel, to test this I went to the accommodation page. This showed me that I could put in some details of my planned visit and it would give me the top three recommended hotels from TripAdvisor and tells me the price range for the hotels on the selected date, therefore fulfilling the user story by showing a range of hotels to stay in. Finally, I was able to test the l last user story and check that users were able to see the main attractions. To do this I went to the attractions page where I saw  Google maps with markers on it, when I zoomed in I was able to see the markers spread out and show me where the attractions were in relation to each other. However, the markers were just labelled with letters of the alphabet which did not really give much information about what attractions there were. In order to better fulfil this user story I changed the label names to the names of the attractions in the order the coordinates were written in the JavaScript file, to then give users a more useful overview of what is where in the city. To begin with I tried doing this by using “var labels =” then the strings separated by commas, however when I looked at this it split up the first word and gave one letter of the first word to each attraction. To overcome this I put the attraction names into an array of strings, I then went back and realised that the wrong labels were on some of the attractions, but there were full words as the labels so I went back into my code to re-order the items in the array. Due to the way the API key is set up for Google Maps you need to give the URL of the site that it will allow calls from, therefore I was unable to make changes and test them in a preview like normal, so I had to commit and push the changes each time to be able to see what it had done. Although this was not ideal, I tried adding the URL of the preview to the allowed sights for the API, but because it was not a proper URL it would not allow me to do this. 

After checking that the code was correct and the user stories were fulfilled, I then double checked that goals of the website were also met. The images throughout the website show users the attractions in the city, giving them a taste of what they can experience themselves when they visit Prague. The website provides a basic overview of the city with the facts page and users are given prices for flights and hotels in order to give them an idea of how much their trip will cost. And the final goal of the website is to not only show users what attractions there are in the city, but also give them an idea of where they are in relation to each other, this is achieved through the use of the Google maps API that shows the attractions marked up on the map. 

For the final part of my testing I tried to break the website to see what I could improve. In order to do this, I sent the deployed sight to friends and family to use the sight and tell me what they thought, this was how I found that you could not close the date pickers on mobiles. Through this user testing I found that users couldn't easily see which attraction was where on Google maps as the labels were too big for the markers. Because of this I decided to revert back to using the letters of the alphabet in the markers as that would look neater and be more readable, and by adding the key I was able to incluse a h3 tag, thus getting rid of the warning on the HTML validator. We also found the refresh buttons only reset the form that they were in but did not reset the results area on the pages. To overcome this, I used classes so that they did not have to be unique and I could then use one bit of JavaScript to work on multiple pages. I used the click function so the action had to be called to prevent it from constantly resetting the form and results, I then assigned a class name to the sections I wanted to clear, and used that alongside empty() to clear the contents out of the results area, while “type=reset” reset the form element. 
## Issues and resolutions
During the planning process I was going to create a website to help users pick a country to go on holiday to, however this was not feasible as finding appropriate APIs was difficult. In order to overcome this, I decided to change the scope of the website and focus on giving the users more information about one city. Not only did this allow me to add more detailed information to the pages, but it was also easier to source useful APIs as there was only one focus and not trying to find one API to cover the whole world. 

Deployment
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:
1.	From the menu items near the top of the page, select Settings.
2.	Scroll down to the GitHub Pages section.
3.	Under Source click the drop-down menu labelled None and select Master Branch
4.	On selecting Master Branch, the page is automatically refreshed, the website is now deployed.
5.	Scroll back down to the GitHub Pages section to retrieve the link to the deployed website.
How to run this project locally
To clone this project from GitHub:
1.	Under the repository name, click "Clone or download".
2.	In the Clone with HTTPs section, copy the clone URL for the repository.
3.	In your local IDE open Git Bash.
4.	Change the current working directory to the location where you want the cloned directory to be made.
5.	Type git clone, and then paste the URL you copied in Step 3.
git clone https://github.com/Amyh97/ms2
6.	Press Enter. Your local clone will be created.
Further reading and troubleshooting on cloning a repository from GitHub here.

## Credits 
### Content
-	The code for the Google maps [https://developers.google.com/maps/documentation/javascript/tutorial] API came from the documentation that comes with the API.
-	The currency converter API came from  Currency Exchange [https://rapidapi.com/fyhao/api/currency-exchange]via Rapid API.
-	The information for the weather averages came from Time and Date [https://www.timeanddate.com/weather/czech-republic/prague/climate]
-	The Flights API comes from Skyscanner via Rapid API [https://rapidapi.com/skyscanner/api/]
-	For the hotel API I went onto Rapid API and used the TripAdvisor [https://rapidapi.com/apidojo/api/tripadvisor1] API. 
-	Other information, mainly on index.html, but also the information on how to get to and from the airport came from the Lonely Planet Eastern Europe guidebook. 
### Media 
-	The flag icon in the top right-hand corner of the pages came from Wikimedia [https://commons.wikimedia.org/wiki/File:Flag_of_the_Czech_Republic_(bordered).svg]
-	All other images used on the website are my own photos that I put into my GitHub repository 

## Acknowledgements
•	I was given feedback and advice from Akshat Garg.
•	I received technical support and advise from the tutors at Code Institute. 

## Disclaimer
This project was created for educational purposes.


