In this Project called Vertical Slider where images align themselves with their respective vertical header upon the click of arrow buttons.
First we place left-slider from 0 to 4 and right-slider from 4 to 0 (in opposite directions).Which will align themselves i.e left-slider[0] with right-slider[0] when the user clicks on one of the arrows.

slideLeft.style.top = `-${(slidesLength -1) * 100}vh` This code looks confusing. Let me explain. The secret is in style(CSS).

In Style we give the slider-container which is whole container with both right and left slider a height of 100vh which takes up the complete view-port.

And we hide the overflow which looks like only one div is appearing at each click, but behind the hood all the divs are placed left-slider[0] with the right-slider[3] and left-slider header [1] is palced with right-slider image[2] and so on.

So we keep the right-slider static and change the position of left-slider with this -> slideLeft.style.top = `-${(slidesLength -1) * 100}vh` i.e .left-slider {
top: -300vh; -----> this brings the last most right-slider at position right-slider[3] to top
} which makes the last left-slider appear first in the view-port which takes up the whole height of view-port and hides all the other right-slider divs. To see this working remove overflow : hidden.
