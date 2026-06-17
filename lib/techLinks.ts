export const getTechLink = (techName: string): string => {
  const links: Record<string, string> = {
    "Kotlin": "https://kotlinlang.org/",
    "Jetpack Compose": "https://developer.android.com/jetpack/compose",
    "Android Studio": "https://developer.android.com/studio",
    "Material Design": "https://m3.material.io/",
    "Material Design 3": "https://m3.material.io/",
    "HTML": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "React": "https://react.dev/",
    "Next.js": "https://nextjs.org/",
    "Tailwind": "https://tailwindcss.com/",
    "TypeScript": "https://www.typescriptlang.org/",
    "Laravel": "https://laravel.com/",
    "MySQL": "https://www.mysql.com/",
    "Express": "https://expressjs.com/",
    "Express.js": "https://expressjs.com/",
    "C++": "https://cplusplus.com/",
    "Python": "https://www.python.org/",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "Git": "https://git-scm.com/",
    "GitHub": "https://github.com/",
    "VS Code": "https://code.visualstudio.com/",
    "Figma": "https://www.figma.com/",
    "PHP": "https://www.php.net/",
    "SFML": "https://www.sfml-dev.org/",
    "Room Database (SQLite)": "https://developer.android.com/training/data-storage/room"
  };

  return links[techName] || `https://www.google.com/search?q=${encodeURIComponent(techName)}`;
};
