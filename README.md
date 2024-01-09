# Portfolio Website : Everyone has one
This website is to show case my projects and programming ability in full-stack development, utilizing SQL, documentation work, continuous integration and deployment pipelines.

## Website : How it looks
### Header and Navigation bar
Currently the website hs a header and navigation links, the header is just a title for the website.

The GitHub navigation link should lead you to this repository where the website is being made,
and the LinkedIn navigation link should lead you to my LinkedIn profile.

Depending on your view port, i.e. if your on mobile or desktop, the navigation links will either redirect your page entirely or open a new tab.

This was made intentionally to work around the ":hover" caching for mobile web browsers where certain CSS event driven changes would be frozen on returning from a new tab. The following are examples of the bug,

### Projects section
This section will contain information on the projects that we are working on, such as the
vertical landing project, or the smart home automation project, and the tecnologies used.

Note that there should be visuals, i.e. images in place to showcase some of the work.

## Testing : Javascript
For our continuous integration, we are testing the view port for mobile and desktop view, and checking whether or not those changes are detected on our tests.

To do so, we need to create a package.json file for holding our dependencies for the test container that is being run by GitHub Actions, and also for directing our GitHub Actions where the test will be located.

The Test folder contains the unit tests for our program.