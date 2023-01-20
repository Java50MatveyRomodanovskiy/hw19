const employees = [
    createEmployee(123,"Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124,"David", 1975, 15500, "Tel Aviv", "Israel"),
    createEmployee(125,"Sarah", 1985, 15000, "New York", "USA"),
    createEmployee(126,"Abraham", 1990, 13000, "Washington", "USA"),
    createEmployee(127,"Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128,"Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129,"Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130,"Victor", 2003, 10000, "Arad", "Israel")
]

//HW #19
//Task 2
function getMostPupulatedCountries(employees, counter) {
const arrayCounter = Object.entries(countriesCounter(employees));
arrayCounter.sort(countriesComp);
const res = [];
if (counter > arrayCounter.length){
  counter = arrayCounter.length;
}
for (let i = 0; i < counter; i++){
  res[i] = createCountryList(arrayCounter[i][0], arrayCounter[i][1]);
}
return res;
}
function countriesComp (entry1, entry2) {
  let res = entry2[1] - entry1[1];
  if (res == 0){
      res = entry1[0] < entry2[0] ? -1 : 1
  }
  return res;
}
function countriesCounter(employees){
const res = {};
for (let i = 0; i < employees.length; i++){
  if (!res[employees[i].address.country]){
    res[employees[i].address.country] = 1;
  } else {
    res[employees[i].address.country]++;
  }
}
return res;
}
function createCountryList(country, emploeesQuantity){
  return{country, emploeesQuantity}
}
getMostPupulatedCountries(employees,2).forEach(e=>console.log(e));

//Task 1
function getMostPupulatedCountry(employees){
  return (getMostPupulatedCountries(employees, 1)[0]);
}
console.log(getMostPupulatedCountry(employees));

// Task 3
function isAnagram(word, anagram) {
  const wordArr = word.split('');
  const anagramArr = anagram.split('');
  if (wordArr.length != anagramArr.length || word === anagram){
    return false;
  }
  const res = {};
  for (let i = 0; i < wordArr.length; i++){
    if (!res[wordArr[i]]){
      res[wordArr[i]] = 1;
    } else {
      res[wordArr[i]]++;
      if  (!res[wordArr[i]]){
        delete res[wordArr[i]];
      }
    }
    if(!res[anagramArr[i]]){
      res[anagramArr[i]] = -1;
    } else {
      res[anagramArr[i]]--;
      if  (!res[anagramArr[i]]){
        delete res[anagramArr[i]];
      }
    }
  }
  if (!Object.entries(res).length){
    return true;
  }else{
    return false;
  }

  }
console.log(isAnagram('mamba', 'bamba'));
console.log(isAnagram('mamba', 'mamba'));
console.log(isAnagram('aaaaa','bbbbb'));
console.log(isAnagram('amba','bama'));
console.log(isAnagram('sole','osel'));
console.log(isAnagram('ole','osel'));