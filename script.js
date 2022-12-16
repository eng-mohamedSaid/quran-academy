const ahadith = () => {
  const hadith = document.querySelector(".why-hadith");
  const teller = document.querySelector(".why-teller");
  const rightBtn = document.querySelector(".why-right-btn");
  const leftBtn = document.querySelector(".why-left-btn");

  let index = 0;
  const hadiths = [];

  //create a function to be readable and
  // hadiths.push({ hadith: "11111", teller: "teller1" });
  const createHadith = (hadith, teller) => {
    hadiths.push({ hadith, teller });
  };

  // createHadith(
  //   "إِنَّ الْقُرْآنَ يَلْقَى صَاحِبَهُ يَوْمَ الْقِيَامَةِ حِينَ يَنْشَقُّ عَنْهُ قَبْرُهُ كَالرَّجُلِ الشَّاحِبِ، فَيَقُولُ لَهُ: هَلْ تَعْرِفُنِي؟ فَيَقُولُ: مَا أَعْرِفُكَ، فَيَقُولُ: أَنَا صَاحِبُكَ الْقُرْآنُ، الَّذِي أَظْمَأْتُكَ فِي الْهَوَاجِرِ، وَأَسْهَرْتُ لَيْلَكَ، وَإِنَّ كُلَّ تَاجِرٍ مِنْ وَرَاءِ تِجَارَتِهِ، وَإِنَّكَ الْيَوْمَ مِنْ وَرَاءِ كُلِّ تِجَارَةٍ، فَيُعْطَى الْمُلْكَ بِيَمِينِهِ، وَالْخُلْدَ بِشِمَالِهِ، وَيُوضَعُ عَلَى رَأْسِهِ تَاجُ الْوَقَارِ، وَيُكْسَى وَالِدَاهُ حُلَّتَيْنِ لاَ يُقَوَّمُ لَهُمَا أَهْلُ الدُّنْيَا، فَيَقُولاَنِ: بِمَ كُسِينَا هَذَا؟ فَيُقَالُ: بِأَخْذِ وَلَدِكُمَا الْقُرْآنَ، ثُمَّ يُقَالُ لَهُ: اقْرَأْ وَاصْعَدْ فِي دَرَجِ الْجَنَّةِ وَغُرَفِهَا، فَهُوَ فِي صُعُودٍ مَا دَامَ يَقْرَأُ، هَذًّا كَانَ أَوْ تَرْتِيلًا",

  //   "رواه أحمد والألباني   "
  // );
  createHadith(
    "يُقَالُ لِصَاحِبِ الْقُرْآنِ: اقْرَأْ وَارْتَقِ وَرَتِّلْ كَمَا كُنْتَ تُرَتِّلُ فِي الدُّنْيَا، فَإِنَّ مَنْزِلَتَكَ عِنْدَ آخِرِ آيَةٍ تَقْرَؤُهَا",

    "رواه أحمد والترمذي وأبو داود "
  );
  createHadith(
    "إِنَّ لِلَّهِ عَزَّ وَجَلَّ أَهْلِينَ مِنْ النَّاسِ، قِيلَ: مَنْ هُمْ يَا رَسُولَ اللَّهِ؟ قَالَ: أَهْلُ الْقُرْآنِ هُمْ أَهْلُ اللَّهِ وَخَاصَّتُهُ",

    "صححه الألباني"
  );
  createHadith(
    "مَثَلُ الَّذِي يَقْرَأُ الْقُرْآنَ وَهُوَ حَافِظٌ لَهُ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ",
    "البخاري"
  );
  //right button to go to the last element
  rightBtn.addEventListener("click", () => {
    //if you at the first element ===> make index equal to the last index which is equal to length of tha array
    //else decrease the index to go to the before item
    if (index === 0) {
      index = hadiths.length;
    }
    index--;
    hadith.textContent = hadiths[index].hadith;
    teller.textContent = hadiths[index].teller;
  });

  //left to go to the second element
  leftBtn.addEventListener("click", () => {
    index++;
    //if you at the last item ==> go to the first index
    if (index === hadiths.length) {
      index = 0;
    }
    hadith.textContent = hadiths[index].hadith;
    teller.textContent = hadiths[index].teller;
  });

  setInterval(() => {
    index++;
    //if you at the last item ==> go to the first index
    if (index === hadiths.length) {
      index = 0;
    }
    hadith.textContent = hadiths[index].hadith;
    teller.textContent = hadiths[index].teller;
  }, 6000);
};
ahadith();

//
const menuBtn = document.querySelector(".nav-menu");
const navBox = document.querySelector(".nav");
menuBtn.addEventListener("click", () => {
  navBox.classList.toggle("block");
});
