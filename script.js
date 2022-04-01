var quotes = ['The trickster\'s function is to break taboos, create mischief, stir things up. In the end, the trickster gives people what they really want, some sort of freedom. - Tom Robbins',
  'Disbelief in magic can force a poor soul into believing in government and business. - Tom Robbins',
  'The trouble with the fast lane is that all the movement is horizontal. And I like to go vertical sometimes. - Tom Robbins',
  'Our world isn\'t made of earth, air and water or even molecules and atoms; our world is made of language. - Tom Robbins',
  'I\'m not infatuated with frivolousness. We\'re just good friends. - Tom Robbins',
  'In fiction, when you paint yourself into a corner, you can write a pair of suction cups onto the bottoms of your shoes and walk up the wall and out the skylight and see the sun breaking through the clouds. In nonfiction, you don\'t have that luxury. - Tom Robbins',
  'I\'m not infatuated with frivolousness. We\'re just good friends. - Tom Robbins',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.  Martin Fowler',
'First, solve the problem. Then, write the code. John Johnso',
'Experience is the name everyone gives to their mistakes. Oscar Wilde',
' In order to be irreplaceable, one must always be different  Coco Chanel',
'Java is to JavaScript what car is to Carpet. Chris Heilman',
'Knowledge is power.  Francis Bacon',
'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code Dan Salomon',
'Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away Antoine de Saint-Exupery',
'Ruby is rubbish! PHP is phpantastic! Nikita Popov',
' Code is like humor. When you have to explain it, it is  bad. Cory House ',
'Fix the cause, not the symptom.  Steve Maguire',
'Optimism is an occupational hazard of programming: feedback is the treatment.  Kent Beck ',





]






function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}