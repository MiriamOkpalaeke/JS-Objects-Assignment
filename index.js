// question 1 Using the constructor method to create an InstagramPost () constructor function
// that takes the properties below as arguments.

function InstagramPost(
  handleOfAuthor,
  content,
  anImageLinkPostedByTheAuthorOfThePost,
  numberOfView,
  numberOfLikes
) {
  this.handleOfAuthor = handleOfAuthor;
  this.content = content;
  this.anImageLinkPostedByTheAuthorOfThePost =
    anImageLinkPostedByTheAuthorOfThePost;
  this.numberOfView = numberOfView;
  this.numberOfLikes = numberOfLikes;
}
const Instagram = new InstagramPost(
  "naijafoodblog",
  "No words, just negodu this plate of awesomeness 😍",
  "https://insta-clone-assignment.netlify.app/images/103951311_560916234570536_3058940740786086734_n.jpg",
  1000,
  395
);
console.log(Instagram);

//  question 2. Create 2 Instagram post objects from the constructor function you created above
//1st post
const Instagram2 = new InstagramPost(
  "bellanaijaWeddings",
  "Cute kids alert...",
  "https://insta-clone-assignment.netlify.app/images/317595657_838494914028668_7824586934344216996_n.jpg",
  10000,
  5000
);
console.log({ Instagram2 });

//2nd post
const Instagram3 = new InstagramPost(
  "dunsioyekan",
  "This Friday!!! Don’t be told about it…",
  "https://insta-clone-assignment.netlify.app/images/317367062_160112920054795_1284761253155771453_n.jpg",
  8000,
  780
);
console.log({ Instagram3 });

//question 3
/**
 * Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
 * Recently, he wrote the JAMB exam and had the following scores in his combination:
 *ENG - 70
 *GOVT - 85
 *LIT - 82
 *CRK - 94

 */
/**
 a. Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, 
   create an object representing Musa from the factory function.
   */
function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}
const createPerson1 = createPerson("Musa Dawodu", "19", "Lekki, Lagos State");
console.log({ createPerson1 });

/**
  b. Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. 
     Then create an object representing Muse’s JAMB scores. 
*/
function createJambScores(ENG, GOVT, LIT, CRK) {
  return {
    ENG: ENG,
    GOVT: GOVT,
    LIT: LIT,
    CRK: CRK,
  };
}
const createJambScores1 = createJambScores(70, 85, 82, 94);
console.log({ createJambScores1 });

//Add the object as a property to Musa object you created above in (a) above
Object.assign(createPerson1, createJambScores1);
console.log({ createPerson1 });
// this was done by merging the objects

// question 4. What are the different ways you can clone an object? Give examples for each of them.
/**
 *  1. Using the object assign method
 * See example below
 */
const firstMusic = {
  songWriter: "Mercy Chinwo",
  title: "Amazing God",
  yearReleased: 2021,
};
const secondMusic = Object.assign({}, firstMusic);
console.log({ firstMusic });
console.log({ secondMusic });

//let me change to title
secondMusic.title = "Oyoyo Chukwu";
console.log({ firstMusic });
console.log({ secondMusic });

/**
 * 2. using the spread(...) syntax Method
 * see example below
 */
const thirdMusic = { ...firstMusic };
thirdMusic.title = "Yahweh";
console.log({ firstMusic });
console.log({ thirdMusic });

/**
 * 3. Using JSON.Parse(JSON.stringify()) method
 * see example below
 */
const fourthMusic = JSON.parse(JSON.stringify(firstMusic));
fourthMusic.title = "Obinasom";
console.log({ firstMusic });
console.log({ fourthMusic });

// question 5. As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christain Inumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  PDP: "Atiku Abubakar",
};
//Using any of the enumeration methods taught in class (for…in  or for..of), log
//out each of the presidential candidates in this format:
//’Omoyele Sowore is the presidential candidate of AAC’
 for (const key of Object.keys(presidentialCandidates)) {
   console .log(presidentialCandidates[key]  + " is the presidential candidate of " + (key));
 }