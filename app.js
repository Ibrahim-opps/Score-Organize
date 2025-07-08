let scores = [320, 230, 480, 120];
document.write("Scores of Students: " + scores + "<br>");
    for (let i = 0; i < scores.length; i++) {
      for (let j = 0; j < scores.length - 1; j++) {
        if (scores[j] > scores[j + 1]) {
          let temp = scores[j];
          scores[j] = scores[j + 1];
          scores[j + 1] = temp;
        }
      }
    }

    document.write("Ordered Scores of Students: " + scores);
