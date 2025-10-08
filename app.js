// Quiz Data and Configuration
const quizData = {
  "categories": [
    {
      "id": "rialo-basics",
      "name": "Rialo Basics",
      "description": "Fundamental knowledge about Rialo blockchain",
      "color": "#6366f1"
    },
    {
      "id": "blockchain-fundamentals", 
      "name": "Blockchain Fundamentals",
      "description": "Core blockchain concepts and terminology",
      "color": "#8b5cf6"
    },
    {
      "id": "web3-development",
      "name": "Web3 Development", 
      "description": "Development practices and tools in Web3",
      "color": "#06b6d4"
    },
    {
      "id": "defi-dapps",
      "name": "DeFi & dApps",
      "description": "Decentralized finance and applications",
      "color": "#10b981"
    }
  ],
  "questions": [
    {
      "id": 1,
      "category": "rialo-basics",
      "difficulty": "easy",
      "question": "What does Rialo stand for in its mission statement?",
      "options": [
        "Real-world Integration and Automated Logic Operations",
        "Rialo Isn't A Layer One", 
        "Robust Infrastructure for Application Logic Optimization",
        "Revolutionary Infrastructure for Advanced Layer Operations"
      ],
      "correct": 1,
      "explanation": "According to Rialo's documentation, the name is an acronym that stands for 'Rialo Isn't A Layer One', emphasizing that it transcends traditional blockchain categorizations.",
      "points": 5
    },
    {
      "id": 2,
      "category": "rialo-basics", 
      "difficulty": "medium",
      "question": "Which two key technologies does Rialo combine in its dual-engine approach?",
      "options": [
        "Ethereum Virtual Machine and WebAssembly",
        "Solana Virtual Machine and RISC-V Architecture",
        "Bitcoin Script and JavaScript V8",
        "Cosmos SDK and Tendermint"
      ],
      "correct": 1,
      "explanation": "Rialo uses a dual-engine approach combining Solana VM for high performance and parallel processing, and RISC-V architecture for efficient, flexible, and ZK-proof friendly computation.",
      "points": 10
    },
    {
      "id": 3,
      "category": "rialo-basics",
      "difficulty": "hard", 
      "question": "What is the primary architectural innovation that sets Rialo apart from traditional blockchains?",
      "options": [
        "Proof-of-Stake consensus mechanism",
        "Event-Driven Architecture (EDA) with native off-chain data listening",
        "Sharding and layer-2 scaling solutions", 
        "Cross-chain interoperability protocols"
      ],
      "correct": 1,
      "explanation": "Rialo's most innovative feature is its Event-Driven Architecture (EDA) that natively listens to off-chain events and reacts to them, eliminating the need for oracles in many use cases.",
      "points": 15
    },
    {
      "id": 4,
      "category": "rialo-basics",
      "difficulty": "medium",
      "question": "Who are the co-founders of Rialo (Subzero Labs)?",
      "options": [
        "Vitalik Buterin and Gavin Wood",
        "Ade Adepoju and Lu Zhang",
        "Anatoly Yakovenko and Raj Gokal", 
        "Brian Armstrong and Fred Ehrsam"
      ],
      "correct": 1,
      "explanation": "Rialo was founded by Ade Adepoju and Lu Zhang, both former engineers at Mysten Labs who worked on the Sui blockchain. They bring experience from Netflix, Meta, and AMD.",
      "points": 10
    },
    {
      "id": 5,
      "category": "rialo-basics",
      "difficulty": "easy",
      "question": "How much funding did Rialo raise in their seed round?",
      "options": [
        "$15 million",
        "$20 million", 
        "$25 million",
        "$30 million"
      ],
      "correct": 1,
      "explanation": "Rialo raised $20 million in their seed funding round led by Pantera Capital, with participation from Coinbase Ventures, Hashed, and other investors.",
      "points": 5
    },
    {
      "id": 6,
      "category": "blockchain-fundamentals",
      "difficulty": "easy",
      "question": "What does 'dApp' stand for?",
      "options": [
        "Digital Application",
        "Decentralized Application",
        "Distributed Application Protocol",
        "Dynamic Application Platform"
      ],
      "correct": 1,
      "explanation": "dApp stands for 'Decentralized Application' - applications that run on a decentralized network rather than centralized servers.",
      "points": 5
    },
    {
      "id": 7,
      "category": "blockchain-fundamentals",
      "difficulty": "medium", 
      "question": "What is the main purpose of oracles in blockchain systems?",
      "options": [
        "To validate transactions on the blockchain",
        "To provide external data to smart contracts",
        "To create new blocks in the chain",
        "To store private keys securely"
      ],
      "correct": 1,
      "explanation": "Oracles serve as bridges between blockchains and external data sources, providing real-world information to smart contracts that cannot access off-chain data directly.",
      "points": 10
    },
    {
      "id": 8,
      "category": "blockchain-fundamentals",
      "difficulty": "hard",
      "question": "What is the 'blockchain trilemma'?",
      "options": [
        "The balance between privacy, transparency, and immutability",
        "The trade-off between scalability, security, and decentralization", 
        "The choice between proof-of-work, proof-of-stake, and proof-of-authority",
        "The decision between layer-1, layer-2, and sidechain solutions"
      ],
      "correct": 1,
      "explanation": "The blockchain trilemma, coined by Ethereum's Vitalik Buterin, describes the challenge of achieving high levels of scalability, security, and decentralization simultaneously.",
      "points": 15
    },
    {
      "id": 9,
      "category": "blockchain-fundamentals",
      "difficulty": "medium",
      "question": "What does 'gas' represent in blockchain transactions?",
      "options": [
        "The speed of transaction processing",
        "The computational cost of executing operations",
        "The storage space required for data",
        "The network congestion level"
      ],
      "correct": 1,
      "explanation": "Gas represents the computational cost required to execute operations on the blockchain. Users pay gas fees to compensate network validators for processing their transactions.",
      "points": 10
    },
    {
      "id": 10,
      "category": "blockchain-fundamentals",
      "difficulty": "easy",
      "question": "What is a smart contract?",
      "options": [
        "A legal agreement stored on paper",
        "A self-executing contract with terms written in code",
        "A traditional contract reviewed by lawyers",
        "A contract that can be modified after deployment"
      ],
      "correct": 1,
      "explanation": "A smart contract is a self-executing contract where the terms of agreement are directly written into code and automatically executed when predetermined conditions are met.",
      "points": 5
    },
    {
      "id": 11,
      "category": "web3-development",
      "difficulty": "medium",
      "question": "What is the main advantage of Rialo's Web2-like development experience?",
      "options": [
        "It uses traditional SQL databases",
        "It eliminates the need for blockchain knowledge",
        "It reduces complexity by making infrastructure invisible and intuitive",
        "It only supports JavaScript programming"
      ],
      "correct": 2,
      "explanation": "Rialo aims to make blockchain infrastructure invisible and intuitive, allowing developers to focus on building applications rather than dealing with complex blockchain-specific infrastructure.",
      "points": 10
    },
    {
      "id": 12,
      "category": "web3-development", 
      "difficulty": "hard",
      "question": "In Rialo's architecture, what replaces traditional middleware like oracles and bridges?",
      "options": [
        "Advanced smart contract libraries",
        "Native web connectivity and event-driven transactions",
        "Third-party API integrations",
        "Layer-2 scaling solutions"
      ],
      "correct": 1,
      "explanation": "Rialo's event-driven architecture and native web connectivity eliminate the need for traditional middleware, allowing direct interaction with real-world data and services.",
      "points": 15
    },
    {
      "id": 13,
      "category": "web3-development",
      "difficulty": "medium",
      "question": "What programming language is Rialo's SDK primarily written in?",
      "options": [
        "JavaScript",
        "Rust",
        "Python", 
        "Solidity"
      ],
      "correct": 1,
      "explanation": "The Rialo SDK (riao-sdk) is available in Rust's package manager Cargo, indicating it's primarily written in Rust, which aligns with modern blockchain development practices.",
      "points": 10
    },
    {
      "id": 14,
      "category": "web3-development",
      "difficulty": "easy",
      "question": "What does 'Web3' primarily refer to?",
      "options": [
        "The third version of the World Wide Web standards",
        "A decentralized internet built on blockchain technology",
        "A new web browser technology",
        "Advanced web development frameworks"
      ],
      "correct": 1,
      "explanation": "Web3 refers to the vision of a decentralized internet built on blockchain technology, where users own their data and interact through decentralized applications.",
      "points": 5
    },
    {
      "id": 15,
      "category": "web3-development",
      "difficulty": "hard",
      "question": "What is the main benefit of Rialo's RISC-V implementation for smart contracts?",
      "options": [
        "Faster transaction processing speeds",
        "Better integration with mobile devices",
        "Efficient, flexible, and ZK-proof friendly computation",
        "Automatic smart contract auditing"
      ],
      "correct": 2,
      "explanation": "RISC-V is an open-source instruction set architecture that provides efficient, flexible computation and is particularly well-suited for zero-knowledge proof applications.",
      "points": 15
    },
    {
      "id": 16,
      "category": "defi-dapps",
      "difficulty": "easy", 
      "question": "What does DeFi stand for?",
      "options": [
        "Digital Finance",
        "Decentralized Finance",
        "Distributed Financial Infrastructure", 
        "Dynamic Financial Integration"
      ],
      "correct": 1,
      "explanation": "DeFi stands for 'Decentralized Finance' - financial services built on blockchain technology that operate without traditional intermediaries like banks.",
      "points": 5
    },
    {
      "id": 17,
      "category": "defi-dapps",
      "difficulty": "medium",
      "question": "What type of applications is Rialo particularly well-suited for?",
      "options": [
        "Simple static websites",
        "Traditional mobile applications", 
        "Real-world integrated applications like AI agents and prediction markets",
        "Basic cryptocurrency wallets"
      ],
      "correct": 2,
      "explanation": "Rialo's event-driven architecture and real-world connectivity make it ideal for applications that need to interact with external data and services, such as AI agents and prediction markets.",
      "points": 10
    },
    {
      "id": 18,
      "category": "defi-dapps",
      "difficulty": "hard",
      "question": "How does Rialo's approach to Real-World Assets (RWA) differ from traditional blockchains?",
      "options": [
        "It uses more secure encryption methods",
        "It provides direct off-chain data interaction without oracles",
        "It only supports digital assets",
        "It requires manual verification processes"
      ],
      "correct": 1,
      "explanation": "Rialo's ability to interact directly with off-chain data facilitates seamless tokenization of real-world assets like real estate or commodities without relying on traditional oracles.",
      "points": 15
    },
    {
      "id": 19,
      "category": "defi-dapps",
      "difficulty": "medium",
      "question": "What is a key advantage of Rialo's prediction markets compared to traditional platforms?",
      "options": [
        "Higher transaction fees",
        "No need for oracles due to native real-world data access",
        "Slower settlement times",
        "Limited market categories"
      ],
      "correct": 1,
      "explanation": "Rialo's native ability to access real-world data eliminates the need for oracles in prediction markets, reducing complexity and potential points of failure.",
      "points": 10
    },
    {
      "id": 20,
      "category": "defi-dapps", 
      "difficulty": "hard",
      "question": "What is the significance of Rialo's 'full-stack programmable network' approach?",
      "options": [
        "It only focuses on frontend development",
        "It provides comprehensive infrastructure similar to Web2 platforms like Firebase",
        "It requires separate tools for each development layer",
        "It only supports specific programming languages"
      ],
      "correct": 1,
      "explanation": "Rialo positions itself as a 'full-stack programmable network' similar to Web2 platforms like Firebase or Vercel, providing comprehensive integrated solutions rather than just transaction execution.",
      "points": 15
    }
  ],
  "scoringTiers": [
    {
      "name": "Rialo Newcomer",
      "minScore": 0,
      "maxScore": 50,
      "badge": "🌱",
      "message": "Welcome to the Rialo ecosystem! You're just getting started on your Web3 journey.",
      "color": "#ef4444"
    },
    {
      "name": "Rialo Builder", 
      "minScore": 51,
      "maxScore": 75,
      "badge": "🔨",
      "message": "Great work! You have a solid understanding of Rialo and blockchain fundamentals.",
      "color": "#f59e0b"
    },
    {
      "name": "Rialo Expert",
      "minScore": 76, 
      "maxScore": 90,
      "badge": "🏆",
      "message": "Excellent! You have deep knowledge of Rialo's architecture and Web3 development.",
      "color": "#06b6d4"
    },
    {
      "name": "Rialo Master",
      "minScore": 91,
      "maxScore": 100,
      "badge": "👑", 
      "message": "Outstanding! You are a true Rialo expert ready to build the future of Web3.",
      "color": "#10b981"
    }
  ],
  "leaderboard": [
    {"name": "Alex.eth", "score": 95, "tier": "Rialo Master"},
    {"name": "BlockchainBoss", "score": 88, "tier": "Rialo Expert"}, 
    {"name": "CryptoBuilder", "score": 82, "tier": "Rialo Expert"},
    {"name": "Web3Wizard", "score": 76, "tier": "Rialo Expert"},
    {"name": "DeFiDev", "score": 73, "tier": "Rialo Builder"}
  ]
};

const appConfig = {
  title: "Rialo Quiz Master",
  subtitle: "Test Your Web3 & Rialo Knowledge",
  version: "1.0.0",
  timePerQuestion: 30,
  passingScore: 70,
  maxQuestions: 20
};

// Application State
let gameState = {
  currentScreen: 'loading',
  selectedCategories: [],
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  score: 0,
  timeLeft: 30,
  timer: null,
  startTime: null,
  isPaused: false,
  soundEnabled: true,
  theme: 'dark'
};

// DOM Elements
const screens = {
  loading: document.getElementById('loading-screen'),
  welcome: document.getElementById('welcome-screen'),
  category: document.getElementById('category-screen'),
  instructions: document.getElementById('instructions-screen'),
  quiz: document.getElementById('quiz-screen'),
  results: document.getElementById('results-screen'),
  leaderboard: document.getElementById('leaderboard-screen')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Simulate loading time
  setTimeout(() => {
    showScreen('welcome');
  }, 2000);
  
  // Load saved settings
  loadSettings();
  
  // Initialize category grid
  initializeCategoryGrid();
  
  // Initialize leaderboard
  initializeLeaderboard();
  
  // Add keyboard event listeners
  document.addEventListener('keydown', handleKeyboardInput);
}

function loadSettings() {
  // In a real app, these would be loaded from localStorage
  // Since we can't use localStorage, we'll use defaults
  gameState.soundEnabled = true;
  gameState.theme = 'dark';
  updateSettingsUI();
}

function updateSettingsUI() {
  const soundToggle = document.getElementById('sound-toggle');
  const themeToggle = document.getElementById('theme-toggle');
  
  if (soundToggle) {
    soundToggle.textContent = gameState.soundEnabled ? '🔊 On' : '🔇 Off';
  }
  
  if (themeToggle) {
    themeToggle.textContent = gameState.theme === 'dark' ? '🌙 Dark' : '☀️ Light';
  }
}

// Screen Management
function showScreen(screenName, direction = 'forward') {
  // Hide current screen
  Object.values(screens).forEach(screen => {
    if (screen && !screen.classList.contains('hidden')) {
      screen.classList.add(direction === 'forward' ? 'slide-out' : 'hidden');
    }
  });
  
  // Show target screen after transition
  setTimeout(() => {
    Object.values(screens).forEach(screen => {
      if (screen) {
        screen.classList.add('hidden');
        screen.classList.remove('slide-out');
      }
    });
    
    if (screens[screenName]) {
      screens[screenName].classList.remove('hidden');
      gameState.currentScreen = screenName;
    }
  }, direction === 'forward' ? 250 : 0);
}

// Welcome Screen Functions
function showWelcomeScreen() {
  showScreen('welcome');
}

function showCategorySelection() {
  showScreen('category');
  // Reset category selection when entering the screen
  gameState.selectedCategories = [];
  updateCategorySelectionUI();
}

// Category Selection Functions
function initializeCategoryGrid() {
  const categoryGrid = document.getElementById('category-grid');
  if (!categoryGrid) return;
  
  categoryGrid.innerHTML = '';
  
  quizData.categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.style.setProperty('--category-color', category.color);
    categoryCard.setAttribute('data-category-id', category.id);
    categoryCard.onclick = () => toggleCategory(category.id, categoryCard);
    
    categoryCard.innerHTML = `
      <h3 class="category-name">${category.name}</h3>
      <p class="category-description-text">${category.description}</p>
    `;
    
    categoryGrid.appendChild(categoryCard);
  });
}

function toggleCategory(categoryId, categoryCard) {
  const index = gameState.selectedCategories.indexOf(categoryId);
  
  if (index === -1) {
    gameState.selectedCategories.push(categoryId);
    categoryCard.classList.add('selected');
  } else {
    gameState.selectedCategories.splice(index, 1);
    categoryCard.classList.remove('selected');
  }
  
  updateProceedButton();
}

function selectAllCategories() {
  gameState.selectedCategories = quizData.categories.map(cat => cat.id);
  updateCategorySelectionUI();
  updateProceedButton();
  
  // Auto-proceed after selection
  setTimeout(() => {
    proceedWithSelectedCategories();
  }, 500);
}

function updateCategorySelectionUI() {
  // Update category cards visual state
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    const categoryId = card.getAttribute('data-category-id');
    if (gameState.selectedCategories.includes(categoryId)) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

function updateProceedButton() {
  const proceedBtn = document.getElementById('proceed-btn');
  if (proceedBtn) {
    const hasSelection = gameState.selectedCategories.length > 0;
    proceedBtn.disabled = !hasSelection;
    
    // Update button text to be more descriptive
    if (hasSelection) {
      const count = gameState.selectedCategories.length;
      const categoryText = count === 1 ? 'category' : 'categories';
      proceedBtn.textContent = `Continue with ${count} ${categoryText}`;
      proceedBtn.classList.remove('btn--outline');
      proceedBtn.classList.add('btn--primary');
    } else {
      proceedBtn.textContent = 'Select categories to continue';
      proceedBtn.classList.remove('btn--primary');
      proceedBtn.classList.add('btn--outline');
    }
  }
}

function proceedWithSelectedCategories() {
  if (gameState.selectedCategories.length === 0) return;
  showScreen('instructions');
}

// Instructions Screen
function startQuiz() {
  prepareQuiz();
  showScreen('quiz');
  displayQuestion();
  startTimer();
}

// Quiz Preparation
function prepareQuiz() {
  // Filter questions by selected categories
  let filteredQuestions = quizData.questions.filter(q => 
    gameState.selectedCategories.includes(q.category)
  );
  
  // Shuffle questions
  filteredQuestions = shuffleArray(filteredQuestions);
  
  // Limit to max questions
  gameState.questions = filteredQuestions.slice(0, appConfig.maxQuestions);
  
  // Reset game state
  gameState.currentQuestionIndex = 0;
  gameState.answers = [];
  gameState.score = 0;
  gameState.startTime = Date.now();
  
  // Update total questions display
  const totalQuestionsSpan = document.getElementById('total-questions');
  if (totalQuestionsSpan) {
    totalQuestionsSpan.textContent = gameState.questions.length;
  }
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Quiz Display Functions
function displayQuestion() {
  const question = gameState.questions[gameState.currentQuestionIndex];
  if (!question) return;
  
  // Update progress
  updateProgress();
  
  // Update question display
  const questionText = document.getElementById('question-text');
  const difficultyIndicator = document.getElementById('difficulty-indicator');
  const currentCategory = document.getElementById('current-category');
  const answersSection = document.getElementById('answers-section');
  
  if (questionText) questionText.textContent = question.question;
  if (difficultyIndicator) {
    difficultyIndicator.textContent = question.difficulty;
    difficultyIndicator.className = `difficulty-indicator ${question.difficulty}`;
  }
  
  if (currentCategory) {
    const category = quizData.categories.find(cat => cat.id === question.category);
    currentCategory.textContent = category ? category.name : '';
  }
  
  // Display answer options
  if (answersSection) {
    answersSection.innerHTML = '';
    
    question.options.forEach((option, index) => {
      const answerButton = document.createElement('button');
      answerButton.className = 'answer-option';
      answerButton.textContent = option;
      answerButton.onclick = () => selectAnswer(index);
      answersSection.appendChild(answerButton);
    });
  }
  
  // Reset timer
  gameState.timeLeft = appConfig.timePerQuestion;
  updateTimerDisplay();
}

function updateProgress() {
  const currentQuestionSpan = document.getElementById('current-question');
  const progressFill = document.getElementById('progress-fill');
  const currentScoreSpan = document.getElementById('current-score');
  
  if (currentQuestionSpan) {
    currentQuestionSpan.textContent = gameState.currentQuestionIndex + 1;
  }
  
  if (progressFill) {
    const progress = ((gameState.currentQuestionIndex + 1) / gameState.questions.length) * 100;
    progressFill.style.width = `${progress}%`;
  }
  
  if (currentScoreSpan) {
    currentScoreSpan.textContent = gameState.score;
  }
}

// Timer Functions
function startTimer() {
  if (gameState.timer) clearInterval(gameState.timer);
  
  gameState.timer = setInterval(() => {
    if (!gameState.isPaused && gameState.timeLeft > 0) {
      gameState.timeLeft--;
      updateTimerDisplay();
      
      if (gameState.timeLeft === 0) {
        timeUp();
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerSpan = document.getElementById('timer');
  if (timerSpan) {
    timerSpan.textContent = gameState.timeLeft;
    
    // Add warning styles for low time
    if (gameState.timeLeft <= 5) {
      timerSpan.style.color = 'var(--color-error)';
    } else if (gameState.timeLeft <= 10) {
      timerSpan.style.color = 'var(--color-warning)';
    } else {
      timerSpan.style.color = 'var(--color-primary)';
    }
  }
}

function timeUp() {
  selectAnswer(-1); // -1 indicates no answer selected
}

// Answer Selection
function selectAnswer(answerIndex) {
  if (gameState.timer) {
    clearInterval(gameState.timer);
    gameState.timer = null;
  }
  
  const question = gameState.questions[gameState.currentQuestionIndex];
  const isCorrect = answerIndex === question.correct;
  const timeTaken = appConfig.timePerQuestion - gameState.timeLeft;
  
  // Calculate score
  let points = 0;
  if (isCorrect) {
    points = question.points;
    // Bonus points for quick answers
    if (timeTaken <= 5) points += 5;
    else if (timeTaken <= 10) points += 3;
    else if (timeTaken <= 15) points += 1;
  }
  
  // Record answer
  gameState.answers.push({
    questionId: question.id,
    selectedAnswer: answerIndex,
    correct: isCorrect,
    points: points,
    timeTaken: timeTaken
  });
  
  gameState.score += points;
  
  // Update UI to show correct/incorrect
  const answerOptions = document.querySelectorAll('.answer-option');
  answerOptions.forEach((option, index) => {
    option.disabled = true;
    if (index === question.correct) {
      option.classList.add('correct');
    } else if (index === answerIndex && !isCorrect) {
      option.classList.add('incorrect');
    }
  });
  
  // Show feedback
  showAnswerFeedback(isCorrect, question.explanation);
}

function showAnswerFeedback(isCorrect, explanation) {
  const feedback = document.getElementById('answer-feedback');
  const feedbackResult = document.getElementById('feedback-result');
  const feedbackExplanation = document.getElementById('feedback-explanation');
  const nextBtn = document.getElementById('next-btn');
  
  if (feedbackResult) {
    const icon = feedbackResult.querySelector('.feedback-icon');
    const text = feedbackResult.querySelector('.feedback-text');
    
    if (isCorrect) {
      icon.textContent = '✅';
      text.textContent = 'Correct!';
      text.style.color = 'var(--color-success)';
    } else {
      icon.textContent = '❌';
      text.textContent = 'Incorrect';
      text.style.color = 'var(--color-error)';
    }
  }
  
  if (feedbackExplanation) {
    feedbackExplanation.textContent = explanation;
  }
  
  if (nextBtn) {
    const isLastQuestion = gameState.currentQuestionIndex === gameState.questions.length - 1;
    nextBtn.textContent = isLastQuestion ? 'View Results →' : 'Next Question →';
  }
  
  if (feedback) {
    feedback.classList.remove('hidden');
  }
}

function nextQuestion() {
  const feedback = document.getElementById('answer-feedback');
  if (feedback) {
    feedback.classList.add('hidden');
  }
  
  gameState.currentQuestionIndex++;
  
  if (gameState.currentQuestionIndex >= gameState.questions.length) {
    finishQuiz();
  } else {
    displayQuestion();
    startTimer();
  }
}

// Quiz Completion
function finishQuiz() {
  calculateResults();
  showScreen('results');
}

function calculateResults() {
  const totalPossiblePoints = gameState.questions.reduce((sum, q) => sum + q.points, 0);
  const percentage = Math.round((gameState.score / totalPossiblePoints) * 100);
  
  // Determine tier
  const tier = quizData.scoringTiers.find(t => 
    percentage >= t.minScore && percentage <= t.maxScore
  ) || quizData.scoringTiers[0];
  
  // Update results display
  const finalScore = document.getElementById('final-score');
  const achievementBadge = document.getElementById('achievement-badge');
  const scoreMessage = document.getElementById('score-message');
  const performanceBreakdown = document.getElementById('performance-breakdown');
  
  if (finalScore) {
    finalScore.textContent = percentage;
  }
  
  if (achievementBadge) {
    const badgeIcon = achievementBadge.querySelector('.badge-icon');
    const badgeName = achievementBadge.querySelector('.badge-name');
    
    if (badgeIcon) badgeIcon.textContent = tier.badge;
    if (badgeName) badgeName.textContent = tier.name;
    
    achievementBadge.style.borderColor = tier.color;
  }
  
  if (scoreMessage) {
    scoreMessage.textContent = tier.message;
  }
  
  // Show category performance breakdown
  if (performanceBreakdown) {
    displayPerformanceBreakdown();
  }
}

function displayPerformanceBreakdown() {
  const performanceBreakdown = document.getElementById('performance-breakdown');
  if (!performanceBreakdown) return;
  
  performanceBreakdown.innerHTML = '<h3>Performance by Category</h3>';
  
  gameState.selectedCategories.forEach(categoryId => {
    const category = quizData.categories.find(cat => cat.id === categoryId);
    const categoryQuestions = gameState.questions.filter(q => q.category === categoryId);
    const categoryAnswers = gameState.answers.filter(answer => {
      const question = gameState.questions.find(q => q.id === answer.questionId);
      return question && question.category === categoryId;
    });
    
    const correct = categoryAnswers.filter(a => a.correct).length;
    const total = categoryQuestions.length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    
    const performanceItem = document.createElement('div');
    performanceItem.className = 'category-performance';
    performanceItem.innerHTML = `
      <span class="category-perf-name">${category.name}</span>
      <span class="category-perf-score">${correct}/${total} (${percentage}%)</span>
    `;
    
    performanceBreakdown.appendChild(performanceItem);
  });
}

// Leaderboard Functions
function initializeLeaderboard() {
  const leaderboardList = document.getElementById('leaderboard-list');
  if (!leaderboardList) return;
  
  leaderboardList.innerHTML = '';
  
  quizData.leaderboard.forEach((entry, index) => {
    const leaderboardEntry = document.createElement('div');
    leaderboardEntry.className = 'leaderboard-entry';
    
    leaderboardEntry.innerHTML = `
      <div class="leaderboard-rank">#${index + 1}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${entry.name}</div>
        <div class="leaderboard-tier">${entry.tier}</div>
      </div>
      <div class="leaderboard-score">${entry.score}%</div>
    `;
    
    leaderboardList.appendChild(leaderboardEntry);
  });
}

function showLeaderboard() {
  showScreen('leaderboard');
}

// Utility Functions
function restartQuiz() {
  gameState.currentQuestionIndex = 0;
  gameState.answers = [];
  gameState.score = 0;
  gameState.selectedCategories = [];
  showScreen('category');
}

function pauseQuiz() {
  gameState.isPaused = !gameState.isPaused;
  const pauseBtn = document.getElementById('pause-btn');
  if (pauseBtn) {
    pauseBtn.textContent = gameState.isPaused ? '▶️ Resume' : '⏸️ Pause';
  }
}

// Settings Functions
function openSettings() {
  const settingsPanel = document.getElementById('settings-panel');
  if (settingsPanel) {
    settingsPanel.classList.remove('hidden');
  }
}

function closeSettings() {
  const settingsPanel = document.getElementById('settings-panel');
  if (settingsPanel) {
    settingsPanel.classList.add('hidden');
  }
}

function toggleSound() {
  gameState.soundEnabled = !gameState.soundEnabled;
  updateSettingsUI();
}

function toggleTheme() {
  gameState.theme = gameState.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-color-scheme', gameState.theme);
  updateSettingsUI();
}

function showHelp() {
  alert('Rialo Quiz Master Help:\n\n• Use keyboard numbers (1-4) to select answers\n• Press Space to pause/resume\n• Press Escape to go back\n• Complete all questions to earn your certification!\n\nGood luck on your Web3 journey! 🚀');
}

// Keyboard Input Handler
function handleKeyboardInput(event) {
  if (gameState.currentScreen === 'quiz') {
    // Number keys for answer selection
    if (event.key >= '1' && event.key <= '4') {
      const answerIndex = parseInt(event.key) - 1;
      const answerOptions = document.querySelectorAll('.answer-option');
      if (answerOptions[answerIndex] && !answerOptions[answerIndex].disabled) {
        selectAnswer(answerIndex);
      }
    }
    
    // Space for pause/resume
    if (event.key === ' ') {
      event.preventDefault();
      pauseQuiz();
    }
  }
  
  // Escape to go back
  if (event.key === 'Escape') {
    if (gameState.currentScreen === 'category') {
      showWelcomeScreen();
    } else if (gameState.currentScreen === 'instructions') {
      showCategorySelection();
    }
  }
  
  // Enter to proceed on feedback screen
  if (event.key === 'Enter' && !document.getElementById('answer-feedback').classList.contains('hidden')) {
    nextQuestion();
  }
}