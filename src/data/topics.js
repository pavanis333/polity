// Data structure for all topics, subtopics, flashcards, and quizzes
// This is the single source of truth — add new content here

const topicsData = [
  {
    id: 'making-of-indian-constitution',
    name: 'Making of the Indian Constitution',
    icon: '🏛️',
    subtopics: [
      {
        id: 'important-dates-constituent-assembly',
        name: 'Important Dates of Constituent Assembly',
        flashcards: [
          {
            id: 'mic-dates-1',
            front: 'When was the first sitting of the Constituent Assembly held? Who boycotted it?',
            back: '9th December 1946. The Muslim League boycotted the first sitting.'
          },
          {
            id: 'mic-dates-2',
            front: 'Who was elected as the President of the Constituent Assembly and on what date?',
            back: 'Dr. Rajendra Prasad was elected as President on 11th December 1946.'
          },
          {
            id: 'mic-dates-3',
            front: 'Who became the temporary chairman of the Constituent Assembly and why?',
            back: 'Dr. Sachidanand Sinha, as the oldest member, became the temporary chairman.'
          },
          {
            id: 'mic-dates-4',
            front: 'Who were the Vice-Presidents of the Constituent Assembly?',
            back: 'H.C. Mukherjee and V.T. Krishnamachari.'
          },
          {
            id: 'mic-dates-5',
            front: 'Who introduced the Objective Resolution and on what date?',
            back: 'Jawaharlal Nehru introduced the Objective Resolution on 13th December 1946.'
          },
          {
            id: 'mic-dates-6',
            front: 'When was the Objective Resolution adopted?',
            back: '22nd January 1947.'
          },
          {
            id: 'mic-dates-7',
            front: 'When was the National Flag adopted by the Constituent Assembly?',
            back: '22nd July 1947.'
          },
          {
            id: 'mic-dates-8',
            front: 'When did the transfer of power establish the dominions of India and Pakistan?',
            back: '15th August 1947 for India, 14th August 1947 for Pakistan.'
          },
          {
            id: 'mic-dates-9',
            front: 'When did the Constituent Assembly ratify India\'s membership in the Commonwealth?',
            back: 'May 1949.'
          },
          {
            id: 'mic-dates-10',
            front: 'When was the Constitution of India adopted/enacted?',
            back: '26th November 1949.'
          },
          {
            id: 'mic-dates-11',
            front: 'What happened on 24th January 1950?',
            back: 'The National Song and National Anthem were adopted. Dr. Rajendra Prasad was elected as the first President of India. The final session of the Constituent Assembly was held.'
          },
          {
            id: 'mic-dates-12',
            front: 'When did the Constitution of India come into force?',
            back: '26th January 1950 — marking the establishment of India as a Republic.'
          },
          {
            id: 'mic-dates-13',
            front: 'Until when did the Constituent Assembly continue as the provisional Parliament?',
            back: 'Until the formation of the new Parliament in May 1952.'
          },
          {
            id: 'mic-dates-14',
            front: 'Who created the artwork for the Preamble? What inspired him?',
            back: 'Beohar Rammanohar Sinha. He was inspired by his visits to Ajanta, Ellora, Sanchi, and Mahabalipuram. He used motifs like lotus, peacock, and mythic symbols.'
          },
          {
            id: 'mic-dates-15',
            front: 'Distinguish between 26th November 1949 and 26th January 1950.',
            back: '26th November 1949: Constitution was adopted/enacted. 26th January 1950: Constitution came into force (Republic Day).'
          },
        ],
        quiz: [
          {
            id: 'mic-dates-q1',
            question: 'When was the first sitting of the Constituent Assembly held?',
            options: ['9th December 1946', '11th December 1946', '13th December 1946', '26th January 1947'],
            correct: 0,
            explanation: 'The first sitting of the Constituent Assembly was held on 9th December 1946. The Muslim League boycotted it.'
          },
          {
            id: 'mic-dates-q2',
            question: 'Who was the temporary chairman of the Constituent Assembly?',
            options: ['Dr. Rajendra Prasad', 'Jawaharlal Nehru', 'Dr. Sachidanand Sinha', 'H.C. Mukherjee'],
            correct: 2,
            explanation: 'Dr. Sachidanand Sinha, being the oldest member, was made the temporary chairman of the Constituent Assembly.'
          },
          {
            id: 'mic-dates-q3',
            question: 'The Objective Resolution was introduced by:',
            options: ['Dr. Rajendra Prasad', 'Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel'],
            correct: 2,
            explanation: 'Jawaharlal Nehru introduced the Objective Resolution on 13th December 1946.'
          },
          {
            id: 'mic-dates-q4',
            question: 'When was the Objective Resolution adopted?',
            options: ['13th December 1946', '22nd January 1947', '22nd July 1947', '26th November 1949'],
            correct: 1,
            explanation: 'The Objective Resolution was introduced on 13th December 1946 but adopted on 22nd January 1947.'
          },
          {
            id: 'mic-dates-q5',
            question: 'The National Flag was adopted by the Constituent Assembly on:',
            options: ['15th August 1947', '22nd July 1947', '26th January 1950', '24th January 1950'],
            correct: 1,
            explanation: 'The National Flag was adopted on 22nd July 1947, before Independence Day.'
          },
          {
            id: 'mic-dates-q6',
            question: 'The Constitution of India was adopted on:',
            options: ['26th January 1950', '15th August 1947', '26th November 1949', '24th January 1950'],
            correct: 2,
            explanation: '26th November 1949 is when the Constitution was adopted/enacted. It came into force on 26th January 1950.'
          },
          {
            id: 'mic-dates-q7',
            question: 'Who were the Vice-Presidents of the Constituent Assembly?',
            options: [
              'Dr. Sachidanand Sinha and H.C. Mukherjee',
              'H.C. Mukherjee and V.T. Krishnamachari',
              'V.T. Krishnamachari and Jawaharlal Nehru',
              'Dr. Rajendra Prasad and H.C. Mukherjee'
            ],
            correct: 1,
            explanation: 'H.C. Mukherjee and V.T. Krishnamachari served as Vice-Presidents of the Constituent Assembly.'
          },
          {
            id: 'mic-dates-q8',
            question: 'Who created the artwork for the Preamble of the Indian Constitution?',
            options: ['Nandalal Bose', 'Beohar Rammanohar Sinha', 'Ram Kinkar Baij', 'Abanindranath Tagore'],
            correct: 1,
            explanation: 'Beohar Rammanohar Sinha created the Preamble\'s artwork, inspired by Ajanta, Ellora, Sanchi, and Mahabalipuram.'
          },
          {
            id: 'mic-dates-q9',
            question: 'Which group boycotted the first sitting of the Constituent Assembly?',
            options: ['Indian National Congress', 'Communist Party', 'Muslim League', 'Hindu Mahasabha'],
            correct: 2,
            explanation: 'The Muslim League boycotted the first sitting of the Constituent Assembly on 9th December 1946.'
          },
          {
            id: 'mic-dates-q10',
            question: 'When was the National Anthem and National Song adopted?',
            options: ['26th January 1950', '26th November 1949', '24th January 1950', '15th August 1947'],
            correct: 2,
            explanation: 'The National Song and National Anthem were adopted on 24th January 1950, two days before the Constitution came into force.'
          },
          {
            id: 'mic-dates-q11',
            question: 'The Constituent Assembly continued as the provisional Parliament until:',
            options: ['26th January 1950', 'May 1952', 'August 1950', 'January 1952'],
            correct: 1,
            explanation: 'The Constituent Assembly continued as the provisional Parliament of India until the formation of the new Parliament in May 1952.'
          },
          {
            id: 'mic-dates-q12',
            question: 'When did the Constituent Assembly ratify India\'s membership in the Commonwealth?',
            options: ['January 1949', 'May 1949', 'August 1949', 'November 1949'],
            correct: 1,
            explanation: 'In May 1949, the Constituent Assembly ratified India\'s membership in the Commonwealth.'
          },
        ]
      },
      {
        id: 'objective-resolution',
        name: 'Objective Resolution',
        flashcards: [
          {
            id: 'or-1',
            front: 'What did the Objective Resolution contain?',
            back: 'It contained the fundamentals and philosophy of the Constitutional structure.'
          },
          {
            id: 'or-2',
            front: 'What was the key declaration of the Objective Resolution regarding India?',
            back: 'Declaration of India as an Independent Sovereign Republic.'
          },
          {
            id: 'or-3',
            front: 'What does the Objective Resolution say about the Union of Territories?',
            back: 'It includes British India, Indian States, and territories willing to join.'
          },
          {
            id: 'or-4',
            front: 'What does the Objective Resolution say about autonomy of territories?',
            back: 'Territories retain status as autonomous units with residual powers, except those assigned to the Union.'
          },
          {
            id: 'or-5',
            front: 'According to the Objective Resolution, where does all power derive from?',
            back: 'All power derives from the people of India (People\'s Authority).'
          },
          {
            id: 'or-6',
            front: 'What does the Objective Resolution guarantee regarding Justice and Equality?',
            back: 'Social, economic, and political justice; equality of opportunity; freedom of thought, expression, and action.'
          },
          {
            id: 'or-7',
            front: 'What safeguards does the Objective Resolution provide for minorities?',
            back: 'Provisions for minorities and backward classes (Minority Safeguards).'
          },
          {
            id: 'or-8',
            front: 'What does the Objective Resolution say about Territorial Integrity?',
            back: 'Sovereign rights on land, sea, and air are maintained.'
          },
          {
            id: 'or-9',
            front: 'What is the Objective Resolution\'s stance on global affairs?',
            back: 'Commitment to world peace and welfare (Global Contribution).'
          },
          {
            id: 'or-10',
            front: 'What is the relationship between the Objective Resolution and the Preamble?',
            back: 'The Preamble of the Constitution of India is a modified version of the Objective Resolution.'
          },
          {
            id: 'or-11',
            front: 'What became the foundation for the Constitution\'s Preamble?',
            back: 'The Objective Resolution (introduced by Nehru on 13th Dec 1946, adopted 22nd Jan 1947).'
          },
          {
            id: 'or-12',
            front: 'List all 7 key features of the Objective Resolution.',
            back: '1. India sovereign & independent\n2. Advancement of peace & well-being\n3. Protection for underprivileged, ethnic & minority groups\n4. Foundation for the Preamble\n5. Social, economic & political justice\n6. People as source of power\n7. Liberty of thought and ideas'
          },
        ],
        quiz: [
          {
            id: 'or-q1',
            question: 'The Objective Resolution contained the fundamentals and ______ of the Constitutional structure.',
            options: ['Framework', 'Philosophy', 'Guidelines', 'Provisions'],
            correct: 1,
            explanation: 'The Objective Resolution contained the fundamentals and philosophy of the Constitutional structure.'
          },
          {
            id: 'or-q2',
            question: 'According to the Objective Resolution, India was declared as:',
            options: ['A Democratic Republic', 'An Independent Sovereign Republic', 'A Federal Democratic State', 'A Secular Socialist Republic'],
            correct: 1,
            explanation: 'The Objective Resolution declared India as an Independent Sovereign Republic. The words "socialist" and "secular" were added later by the 42nd Amendment.'
          },
          {
            id: 'or-q3',
            question: 'Under the Objective Resolution, who is the source of all power?',
            options: ['The Parliament', 'The President', 'The People of India', 'The Constituent Assembly'],
            correct: 2,
            explanation: 'The Objective Resolution states that all power derives from the people of India (People\'s Authority).'
          },
          {
            id: 'or-q4',
            question: 'What status do territories retain under the Objective Resolution?',
            options: [
              'Fully dependent units under the Centre',
              'Autonomous units with residual powers',
              'Independent sovereign territories',
              'Union territories without any powers'
            ],
            correct: 1,
            explanation: 'Territories retain status as autonomous units with residual powers, except those assigned to the Union.'
          },
          {
            id: 'or-q5',
            question: 'The Preamble of the Indian Constitution is a modified version of:',
            options: ['The Government of India Act 1935', 'The Objective Resolution', 'The Cabinet Mission Plan', 'The Indian Independence Act'],
            correct: 1,
            explanation: 'The Preamble of the Constitution of India is a modified version of the Objective Resolution.'
          },
          {
            id: 'or-q6',
            question: 'Which of the following is NOT a feature of the Objective Resolution?',
            options: [
              'Commitment to world peace and welfare',
              'Provisions for minorities and backward classes',
              'Establishment of a Presidential form of government',
              'Liberty of thought and ideas'
            ],
            correct: 2,
            explanation: 'The Objective Resolution did not specify the form of government. It focused on sovereignty, justice, equality, minority safeguards, territorial integrity, and global peace.'
          },
          {
            id: 'or-q7',
            question: 'The Objective Resolution guarantees which types of justice?',
            options: [
              'Only social justice',
              'Social and economic justice',
              'Social, economic, and political justice',
              'Economic and political justice'
            ],
            correct: 2,
            explanation: 'The Objective Resolution guarantees social, economic, and political justice along with equality of opportunity and freedom of thought, expression, and action.'
          },
          {
            id: 'or-q8',
            question: 'What does "Territorial Integrity" in the Objective Resolution refer to?',
            options: [
              'No state can secede from India',
              'Sovereign rights on land, sea, and air are maintained',
              'All territories must join the Union compulsorily',
              'Borders are permanent and cannot be changed'
            ],
            correct: 1,
            explanation: 'Territorial Integrity in the Objective Resolution means sovereign rights on land, sea, and air are maintained.'
          },
          {
            id: 'or-q9',
            question: 'The Union of Territories under the Objective Resolution includes:',
            options: [
              'Only British India',
              'Only Indian States (princely states)',
              'British India, Indian States, and territories willing to join',
              'All territories within the Indian subcontinent'
            ],
            correct: 2,
            explanation: 'The Union of Territories includes British India, Indian States, and territories willing to join.'
          },
          {
            id: 'or-q10',
            question: 'Which of the following correctly describes the Objective Resolution\'s provision on minorities?',
            options: [
              'No special provisions needed',
              'Provisions only for religious minorities',
              'Provisions for minorities and backward classes',
              'Separate electorates for minorities'
            ],
            correct: 2,
            explanation: 'The Objective Resolution provides safeguards for minorities and backward classes, along with protection for underprivileged, ethnic, and minority groups.'
          },
        ]
      },
      {
        id: 'specific-insights-constituent-assembly',
        name: 'Specific Insights on Constituent Assembly',
        flashcards: [
          {
            id: 'sica-1',
            front: 'When was the Constituent Assembly constituted and under what plan?',
            back: 'November 1946, formed under the Cabinet Mission Plan.'
          },
          {
            id: 'sica-2',
            front: 'What was the total strength of the Constituent Assembly?',
            back: 'Total Members: 389 (296 from British India + 93 from Princely States).'
          },
          {
            id: 'sica-3',
            front: 'How were the 296 British India seats distributed?',
            back: '292 members from 11 Governor\'s Provinces and 4 Chief Commissioner\'s Provinces.'
          },
          {
            id: 'sica-4',
            front: 'What was the composition of the Constituent Assembly in terms of community representation?',
            back: 'Representatives from diverse sections: Hindus, Muslims, Sikhs, Parsis, Anglo-Indians, Indian Christians, SCs, STs, and women from all these sections.'
          },
          {
            id: 'sica-5',
            front: 'How were seats allocated in the Constituent Assembly?',
            back: 'In proportion to population (around one seat per million people) of each province and princely state. Seats for each British province were divided among Muslims, Sikhs, and General.'
          },
          {
            id: 'sica-6',
            front: 'What voting method was used for provincial representation in the Constituent Assembly?',
            back: 'Proportional representation using a Single Transferable Vote. Representatives from princely states were nominated by their heads.'
          },
          {
            id: 'sica-7',
            front: 'How were members of the Constituent Assembly selected?',
            back: 'Partly elected (in British Provinces) and partly nominated (by heads of Princely States). Members were indirectly elected by provincial assembly members.'
          },
          {
            id: 'sica-8',
            front: 'Who was notably absent from the Constituent Assembly?',
            back: 'Mahatma Gandhi did not participate in the Constituent Assembly.'
          },
          {
            id: 'sica-9',
            front: 'What happened to the 93 seats allotted to princely states?',
            back: 'They remained mostly unfilled as the princely states opted out.'
          },
          {
            id: 'sica-10',
            front: 'How many total sessions did the Constituent Assembly have? What was the duration?',
            back: '11 sessions over 2 years, 11 months, and 18 days.'
          },
          {
            id: 'sica-11',
            front: 'What was the total expenditure of the Constituent Assembly?',
            back: '₹64 lakh.'
          },
          {
            id: 'sica-12',
            front: 'What symbol was adopted as the seal of the Constituent Assembly?',
            back: 'The Elephant was adopted as the seal of the Constituent Assembly.'
          },
          {
            id: 'sica-13',
            front: 'What changes were made to the Constituent Assembly by the Independence Act, 1947?',
            back: '1. Assembly became a Sovereign Body (fully sovereign, able to alter any law)\n2. Dual Functions: Legislative Body (chaired by G.V. Mavalankar) and Constituent Body (chaired by Dr. Rajendra Prasad)\n3. Became the first Parliament of free India\n4. Membership reduced to 299 after Muslim League withdrawal (down from 389)'
          },
          {
            id: 'sica-14',
            front: 'Who chaired the Legislative Body and who chaired the Constituent Body after the Independence Act, 1947?',
            back: 'Legislative Body: G.V. Mavalankar\nConstituent Body: Dr. Rajendra Prasad'
          },
          {
            id: 'sica-15',
            front: 'What was the reduced membership of the Constituent Assembly after the Muslim League withdrawal?',
            back: '299 (reduced from 389).'
          },
          {
            id: 'sica-16',
            front: 'Who was the Constitutional Adviser to the Constituent Assembly?',
            back: 'Sir B.N. Rau.'
          },
          {
            id: 'sica-17',
            front: 'Who was the Secretary to the Constituent Assembly?',
            back: 'H.V.R. Iyengar.'
          },
          {
            id: 'sica-18',
            front: 'Who was the Chief Draftsman of the Constitution?',
            back: 'S.N. Mukherjee.'
          },
          {
            id: 'sica-19',
            front: 'Who was responsible for decorating the Constitution?',
            back: 'Nand Lal Bose and B.R. Sinha.'
          },
          {
            id: 'sica-20',
            front: 'Who did the Hindi Calligraphy of the Constitution?',
            back: 'Vasant Krishan Vaidya (calligraphy) and Nand Lal Bose (illumination).'
          },
          {
            id: 'sica-21',
            front: 'How many women were in the initial membership of the Constituent Assembly?',
            back: '15 women, later increased by 2.'
          },
          {
            id: 'sica-22',
            front: 'How many women were signatories of the Indian Constitution? Name them.',
            back: '11 women: G. Durgabai, Ammu Swaminathan, Amrit Kaur, Dakshayani Velayudhan, Hansa Mehta, Renuka Ray, Sucheta Kripalani, Purnima Banerji, Begum Qudsiya Aizaz Rasul, Kamala Chaudhri, and Annie Mascarene.'
          },
          {
            id: 'sica-23',
            front: 'Why was Dr. Sachidanand Sinha chosen as the temporary President of the Assembly?',
            back: 'He was the oldest member, following the French practice of electing the oldest member as temporary president.'
          },
        ],
        quiz: [
          {
            id: 'sica-q1',
            question: 'The Constituent Assembly was formed under which plan?',
            options: ['Cripps Mission', 'Cabinet Mission Plan', 'Mountbatten Plan', 'Wavell Plan'],
            correct: 1,
            explanation: 'The Constituent Assembly was formed in November 1946 under the Cabinet Mission Plan.'
          },
          {
            id: 'sica-q2',
            question: 'What was the original total strength of the Constituent Assembly?',
            options: ['299', '389', '296', '292'],
            correct: 1,
            explanation: 'Total Members: 389 (296 from British India + 93 from Princely States).'
          },
          {
            id: 'sica-q3',
            question: 'Which voting method was used for electing provincial representatives to the Constituent Assembly?',
            options: [
              'Direct election by universal adult franchise',
              'First Past the Post system',
              'Proportional representation using Single Transferable Vote',
              'Nomination by the British Government'
            ],
            correct: 2,
            explanation: 'Proportional representation using a Single Transferable Vote was used for provincial representation.'
          },
          {
            id: 'sica-q4',
            question: 'Who did NOT participate in the Constituent Assembly?',
            options: ['Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Mahatma Gandhi', 'Dr. Rajendra Prasad'],
            correct: 2,
            explanation: 'Mahatma Gandhi did not participate in the Constituent Assembly.'
          },
          {
            id: 'sica-q5',
            question: 'What symbol was adopted as the seal of the Constituent Assembly?',
            options: ['Lion', 'Elephant', 'Peacock', 'Ashoka Chakra'],
            correct: 1,
            explanation: 'The Elephant was adopted as the seal of the Constituent Assembly.'
          },
          {
            id: 'sica-q6',
            question: 'What was the total expenditure of the Constituent Assembly?',
            options: ['₹46 lakh', '₹64 lakh', '₹96 lakh', '₹36 lakh'],
            correct: 1,
            explanation: 'The total expenditure of the Constituent Assembly was ₹64 lakh.'
          },
          {
            id: 'sica-q7',
            question: 'After the Independence Act 1947, the membership of the Constituent Assembly was reduced to:',
            options: ['296', '389', '299', '292'],
            correct: 2,
            explanation: 'Membership was reduced to 299 after the Muslim League withdrawal (down from 389).'
          },
          {
            id: 'sica-q8',
            question: 'Who chaired the Legislative Body of the Constituent Assembly after the Independence Act, 1947?',
            options: ['Dr. Rajendra Prasad', 'G.V. Mavalankar', 'Jawaharlal Nehru', 'H.V.R. Iyengar'],
            correct: 1,
            explanation: 'G.V. Mavalankar chaired the Legislative Body, while Dr. Rajendra Prasad chaired the Constituent Body.'
          },
          {
            id: 'sica-q9',
            question: 'Who was the Constitutional Adviser to the Constituent Assembly?',
            options: ['S.N. Mukherjee', 'H.V.R. Iyengar', 'Sir B.N. Rau', 'Dr. B.R. Ambedkar'],
            correct: 2,
            explanation: 'Sir B.N. Rau served as the Constitutional Adviser to the Constituent Assembly.'
          },
          {
            id: 'sica-q10',
            question: 'Who was the Chief Draftsman of the Constitution?',
            options: ['Sir B.N. Rau', 'S.N. Mukherjee', 'H.V.R. Iyengar', 'Dr. B.R. Ambedkar'],
            correct: 1,
            explanation: 'S.N. Mukherjee was the Chief Draftsman. Note: Dr. B.R. Ambedkar was Chairman of the Drafting Committee, which is a different role.'
          },
          {
            id: 'sica-q11',
            question: 'How many sessions did the Constituent Assembly hold in total?',
            options: ['9', '10', '11', '12'],
            correct: 2,
            explanation: 'The Constituent Assembly held 11 sessions over 2 years, 11 months, and 18 days.'
          },
          {
            id: 'sica-q12',
            question: 'How many women were signatories of the Indian Constitution?',
            options: ['9', '11', '13', '15'],
            correct: 1,
            explanation: '11 women signed the Indian Constitution, including G. Durgabai, Ammu Swaminathan, Amrit Kaur, Hansa Mehta, Sucheta Kripalani, and others.'
          },
          {
            id: 'sica-q13',
            question: 'The seats for each British province were divided among which three principal communities?',
            options: [
              'Hindus, Muslims, and Christians',
              'Muslims, Sikhs, and General',
              'Hindus, Muslims, and Sikhs',
              'General, Scheduled Castes, and Muslims'
            ],
            correct: 1,
            explanation: 'Seats for each British province were divided among three principal communities: Muslims, Sikhs, and General.'
          },
          {
            id: 'sica-q14',
            question: 'Who was responsible for the Hindi calligraphy of the Constitution?',
            options: ['Nand Lal Bose', 'Vasant Krishan Vaidya', 'B.R. Sinha', 'Beohar Rammanohar Sinha'],
            correct: 1,
            explanation: 'Vasant Krishan Vaidya did the Hindi calligraphy, while Nand Lal Bose illuminated it.'
          },
        ]
      },
      {
        id: 'major-committees',
        name: 'Major Committees',
        flashcards: [
          {
            id: 'mc-1',
            front: 'Which committees were chaired by Jawaharlal Nehru?',
            back: 'Union Powers Committee, Union Constitution Committee, and States Committee.'
          },
          {
            id: 'mc-2',
            front: 'What was the Expert Committee of the Congress (July 8, 1946)?',
            back: 'Chairman: Jawaharlal Nehru\nPurpose: To prepare material for the Constituent Assembly\nMembers: M. Asaf Ali, K.M. Munshi, N. Gopalaswami Ayyangar, K.T. Shah, D.R. Gadgil, Humayun Kabir, K. Santhanam'
          },
          {
            id: 'mc-3',
            front: 'Which committees were chaired by Dr. Rajendra Prasad?',
            back: 'Rules of Procedure Committee and Steering Committee.'
          },
          {
            id: 'mc-4',
            front: 'Which committees were chaired by Sardar Patel?',
            back: 'Provincial Constitution Committee, Advisory Committee on Fundamental Rights and Minorities & Tribal & Excluded Areas (which had 5 sub-committees).'
          },
          {
            id: 'mc-5',
            front: 'Name the 5 sub-committees under Sardar Patel\'s Advisory Committee.',
            back: '1. Fundamental Rights Sub-Committee — J.B. Kripalani\n2. Minorities Sub-Committee — H.C. Mukherjee\n3. North-East Frontier Tribal Areas and Assam Excluded & Partially Excluded Areas Sub-Committee — Gopinath Bardoloi\n4. Excluded and Partially Excluded Areas (other than Assam) Sub-Committee — A.V. Thakkar\n5. North-West Frontier Tribal Areas Sub-Committee'
          },
          {
            id: 'mc-6',
            front: 'Who chaired the Fundamental Rights Sub-Committee?',
            back: 'J.B. Kripalani.'
          },
          {
            id: 'mc-7',
            front: 'Who chaired the Minorities Sub-Committee?',
            back: 'H.C. Mukherjee.'
          },
          {
            id: 'mc-8',
            front: 'Who chaired the North-East Frontier Tribal Areas and Assam Sub-Committee?',
            back: 'Gopinath Bardoloi.'
          },
          {
            id: 'mc-9',
            front: 'Who chaired the Excluded and Partially Excluded Areas (other than Assam) Sub-Committee?',
            back: 'A.V. Thakkar.'
          },
          {
            id: 'mc-10',
            front: 'Who was the Chairman of the Drafting Committee? How many members did it have?',
            back: 'Dr. B.R. Ambedkar was the Chairman. It had 7 members.'
          },
          {
            id: 'mc-11',
            front: 'Name all 7 members of the Drafting Committee.',
            back: '1. Dr. B.R. Ambedkar (Chairman)\n2. N. Gopalaswamy Ayyangar\n3. Alladi Krishnaswamy Ayyar\n4. Dr. K.M. Munshi\n5. Syed Mohammad Saadullah\n6. N. Madhava Rau (replaced B.L. Mitter who resigned due to ill health)\n7. T.T. Krishnamachari (replaced D.P. Khaitan who died in 1948)'
          },
          {
            id: 'mc-12',
            front: 'Who replaced B.L. Mitter in the Drafting Committee and why?',
            back: 'N. Madhava Rau replaced B.L. Mitter who resigned due to ill health.'
          },
          {
            id: 'mc-13',
            front: 'Who replaced D.P. Khaitan in the Drafting Committee and why?',
            back: 'T.T. Krishnamachari replaced D.P. Khaitan who died in 1948.'
          },
          {
            id: 'mc-14',
            front: 'When was the First Draft of the Constitution published?',
            back: 'February 1948.'
          },
          {
            id: 'mc-15',
            front: 'How long was the public feedback period for the draft Constitution?',
            back: 'Eight months.'
          },
          {
            id: 'mc-16',
            front: 'When was the Second Draft of the Constitution published?',
            back: 'October 1948.'
          },
          {
            id: 'mc-17',
            front: 'How many total meetings did the Drafting Committee hold and how long did it take?',
            back: '141 meetings over less than six months (completion time).'
          },
        ],
        quiz: [
          {
            id: 'mc-q1',
            question: 'Who chaired the Union Powers Committee?',
            options: ['Dr. Rajendra Prasad', 'Sardar Patel', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar'],
            correct: 2,
            explanation: 'Jawaharlal Nehru chaired the Union Powers Committee, Union Constitution Committee, and States Committee.'
          },
          {
            id: 'mc-q2',
            question: 'The Rules of Procedure Committee was chaired by:',
            options: ['Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Dr. Rajendra Prasad', 'Sardar Patel'],
            correct: 2,
            explanation: 'Dr. Rajendra Prasad chaired both the Rules of Procedure Committee and the Steering Committee.'
          },
          {
            id: 'mc-q3',
            question: 'Who chaired the Advisory Committee on Fundamental Rights and Minorities?',
            options: ['Jawaharlal Nehru', 'Sardar Patel', 'J.B. Kripalani', 'Dr. B.R. Ambedkar'],
            correct: 1,
            explanation: 'Sardar Patel chaired the Advisory Committee on Fundamental Rights and Minorities & Tribal & Excluded Areas.'
          },
          {
            id: 'mc-q4',
            question: 'How many sub-committees did Sardar Patel\'s Advisory Committee have?',
            options: ['3', '4', '5', '6'],
            correct: 2,
            explanation: 'The Advisory Committee had 5 sub-committees: Fundamental Rights, Minorities, NE Frontier Tribal Areas, Excluded Areas (non-Assam), and NW Frontier Tribal Areas.'
          },
          {
            id: 'mc-q5',
            question: 'Who chaired the Fundamental Rights Sub-Committee?',
            options: ['H.C. Mukherjee', 'J.B. Kripalani', 'Sardar Patel', 'A.V. Thakkar'],
            correct: 1,
            explanation: 'J.B. Kripalani chaired the Fundamental Rights Sub-Committee under Sardar Patel\'s Advisory Committee.'
          },
          {
            id: 'mc-q6',
            question: 'How many members were in the Drafting Committee?',
            options: ['5', '6', '7', '9'],
            correct: 2,
            explanation: 'The Drafting Committee had 7 members, chaired by Dr. B.R. Ambedkar.'
          },
          {
            id: 'mc-q7',
            question: 'Who replaced B.L. Mitter in the Drafting Committee?',
            options: ['T.T. Krishnamachari', 'N. Madhava Rau', 'K.M. Munshi', 'Alladi Krishnaswamy Ayyar'],
            correct: 1,
            explanation: 'N. Madhava Rau replaced B.L. Mitter who resigned due to ill health.'
          },
          {
            id: 'mc-q8',
            question: 'When was the first draft of the Constitution published?',
            options: ['October 1947', 'February 1948', 'October 1948', 'January 1949'],
            correct: 1,
            explanation: 'The first draft was published in February 1948. After 8 months of public feedback, the second draft was published in October 1948.'
          },
          {
            id: 'mc-q9',
            question: 'How many meetings did the Drafting Committee hold?',
            options: ['101', '121', '141', '161'],
            correct: 2,
            explanation: 'The Drafting Committee held 141 meetings with a completion time of less than six months.'
          },
          {
            id: 'mc-q10',
            question: 'Who chaired the Minorities Sub-Committee?',
            options: ['J.B. Kripalani', 'Gopinath Bardoloi', 'H.C. Mukherjee', 'A.V. Thakkar'],
            correct: 2,
            explanation: 'H.C. Mukherjee chaired the Minorities Sub-Committee under the Advisory Committee.'
          },
          {
            id: 'mc-q11',
            question: 'Who replaced D.P. Khaitan in the Drafting Committee?',
            options: ['N. Madhava Rau', 'Syed Mohammad Saadullah', 'T.T. Krishnamachari', 'N. Gopalaswamy Ayyangar'],
            correct: 2,
            explanation: 'T.T. Krishnamachari replaced D.P. Khaitan who died in 1948.'
          },
          {
            id: 'mc-q12',
            question: 'The Expert Committee of the Congress was formed on:',
            options: ['July 8, 1946', 'December 9, 1946', 'November 26, 1949', 'August 15, 1947'],
            correct: 0,
            explanation: 'The Expert Committee of the Congress was formed on July 8, 1946, chaired by Jawaharlal Nehru, to prepare material for the Constituent Assembly.'
          },
        ]
      },
      {
        id: 'enactment-and-enforcement',
        name: 'Enactment and Enforcement of the Constitution',
        flashcards: [
          {
            id: 'ee-1',
            front: 'When was the Constitution of India adopted (enacted)?',
            back: '26 November 1949.'
          },
          {
            id: 'ee-2',
            front: 'How many members were present on the day the Constitution was adopted?',
            back: 'Out of 299 total members, only 284 were actually present and signed the Constitution.'
          },
          {
            id: 'ee-3',
            front: 'What did the Constitution contain at the time of enactment?',
            back: 'The Preamble, 395 Articles, and 8 Schedules.'
          },
          {
            id: 'ee-4',
            front: 'When was the Preamble enacted — before or after the rest of the Constitution?',
            back: 'The Preamble was enacted after the entire Constitution was already enacted, to align with the philosophy of the Constitution.'
          },
          {
            id: 'ee-5',
            front: 'Which provisions of the Constitution came into force on 26 November 1949 itself?',
            back: 'Citizenship, Elections, Provisional Parliament, temporary and transitional provisions, and short titles contained in Articles 5, 6, 7, 8, 9, 60, 324, 366, 367, 379, 380, 388, 391, 392, and 393.'
          },
          {
            id: 'ee-6',
            front: 'When did the major part of the Constitution come into force?',
            back: '26 January 1950 (commencement day — celebrated as Republic Day).'
          },
          {
            id: 'ee-7',
            front: 'Why was 26 January chosen as the commencement day (Republic Day)?',
            back: 'On 26 January 1930, Purna Swaraj Day was celebrated following the Lahore Session (December 1929) of the Indian National Congress.'
          },
          {
            id: 'ee-8',
            front: 'Which acts were repealed when the Constitution came into force?',
            back: 'The Indian Independence Act, 1947 and the Government of India Act, 1935 with all its enactments were repealed.'
          },
          {
            id: 'ee-9',
            front: 'What continued even after the Constitution came into force regarding the Privy Council?',
            back: 'The Abolition of Privy Council Jurisdiction Act (1949) continued.'
          },
          {
            id: 'ee-10',
            front: 'What is the significance of the Lahore Session (December 1929)?',
            back: 'The Lahore Session of the Indian National Congress (1929) led to the declaration of Purna Swaraj (complete independence), which was celebrated on 26 January 1930 — the date later chosen for Republic Day.'
          },
        ],
        quiz: [
          {
            id: 'ee-q1',
            question: 'How many members signed the Constitution on 26 November 1949?',
            options: ['299', '289', '284', '292'],
            correct: 2,
            explanation: 'Out of 299 total members, only 284 were present and signed the Constitution on 26 November 1949.'
          },
          {
            id: 'ee-q2',
            question: 'The original Constitution contained how many Articles and Schedules?',
            options: ['390 Articles and 10 Schedules', '395 Articles and 8 Schedules', '395 Articles and 12 Schedules', '400 Articles and 8 Schedules'],
            correct: 1,
            explanation: 'At the time of enactment, the Constitution contained the Preamble, 395 Articles, and 8 Schedules.'
          },
          {
            id: 'ee-q3',
            question: 'Which of the following came into force on 26 November 1949 itself?',
            options: [
              'Fundamental Rights',
              'Directive Principles of State Policy',
              'Citizenship and Elections provisions',
              'Emergency Provisions'
            ],
            correct: 2,
            explanation: 'Citizenship, Elections, Provisional Parliament, and temporary/transitional provisions came into force on 26 November 1949 itself.'
          },
          {
            id: 'ee-q4',
            question: '26 January was chosen as Republic Day because:',
            options: [
              'The Constituent Assembly first met on this date',
              'Purna Swaraj Day was celebrated on 26 January 1930',
              'India gained independence on this date',
              'The Objective Resolution was passed on this date'
            ],
            correct: 1,
            explanation: 'Purna Swaraj Day was celebrated on 26 January 1930, following the Lahore Session (December 1929) of the Indian National Congress.'
          },
          {
            id: 'ee-q5',
            question: 'Which of the following acts was NOT repealed when the Constitution came into force?',
            options: [
              'Indian Independence Act, 1947',
              'Government of India Act, 1935',
              'Abolition of Privy Council Jurisdiction Act, 1949',
              'All of the above were repealed'
            ],
            correct: 2,
            explanation: 'The Abolition of Privy Council Jurisdiction Act (1949) continued even after the Constitution came into force.'
          },
          {
            id: 'ee-q6',
            question: 'The Preamble was enacted:',
            options: [
              'Before the Constitution',
              'Along with the Constitution simultaneously',
              'After the entire Constitution was already enacted',
              'On 26 January 1950'
            ],
            correct: 2,
            explanation: 'The Preamble was enacted after the entire Constitution was already enacted, to align with the philosophy of the Constitution.'
          },
          {
            id: 'ee-q7',
            question: 'The Lahore Session of the Indian National Congress was held in:',
            options: ['December 1928', 'December 1929', 'January 1930', 'December 1930'],
            correct: 1,
            explanation: 'The Lahore Session was held in December 1929, which led to the Purna Swaraj declaration celebrated on 26 January 1930.'
          },
          {
            id: 'ee-q8',
            question: 'Which Article deals with Elections that came into force on 26 November 1949?',
            options: ['Article 320', 'Article 324', 'Article 330', 'Article 352'],
            correct: 1,
            explanation: 'Article 324 (dealing with Elections) was among the provisions that came into force on 26 November 1949 itself.'
          },
        ]
      },
      {
        id: 'sources-of-indian-constitution',
        name: 'Sources of Indian Constitution',
        flashcards: [
          {
            id: 'src-1',
            front: 'Which features were borrowed from the Government of India Act, 1935?',
            back: 'Federal scheme, Governor\'s office, Judiciary, Public Service Commission, Emergency Provisions, and Administrative details.'
          },
          {
            id: 'src-2',
            front: 'Which features were borrowed from the British Constitution?',
            back: 'Parliamentary government, Rule of Law, Single Citizenship, Cabinet System, Parliamentary privileges, Bicameralism, and Prerogative writs.'
          },
          {
            id: 'src-3',
            front: 'Which features were borrowed from the US Constitution?',
            back: 'Fundamental Rights, Independent Judiciary, Impeachment of President, Judicial review, Removal of Supreme Court and High Court judges, and Post of Vice-President.'
          },
          {
            id: 'src-4',
            front: 'Which features were borrowed from the Irish Constitution?',
            back: 'DPSP (Directive Principles of State Policy), Method of election of President, and Nomination of Members to Rajya Sabha.'
          },
          {
            id: 'src-5',
            front: 'Which features were borrowed from the Canadian Constitution?',
            back: 'Federation with a strong centre, vesting Residuary powers to the centre, Appointment of State Governors by the Centre, and Advisory Jurisdiction of the Supreme Court.'
          },
          {
            id: 'src-6',
            front: 'Which features were borrowed from the Australian Constitution?',
            back: 'Concurrent List, Joint sitting of both Houses of Parliament, Freedom of trade, commerce and inter-course.'
          },
          {
            id: 'src-7',
            front: 'Which feature was borrowed from Germany (Weimar Constitution)?',
            back: 'Suspension of Fundamental Rights during Emergency.'
          },
          {
            id: 'src-8',
            front: 'Which features were borrowed from the USSR Constitution?',
            back: 'Fundamental Duties and the ideal of Justice (Social, Economic and Political) in the Preamble.'
          },
          {
            id: 'src-9',
            front: 'Which features were borrowed from the French Constitution?',
            back: 'Republic and the Ideals of Liberty, Equality and Fraternity in the Preamble.'
          },
          {
            id: 'src-10',
            front: 'Which feature was borrowed from the South African Constitution?',
            back: 'Procedure for Amendment of the Constitution and election of members of Rajya Sabha.'
          },
          {
            id: 'src-11',
            front: 'Which feature was borrowed from the Japanese Constitution?',
            back: 'The Procedure Established by Law.'
          },
          {
            id: 'src-12',
            front: 'From which country was the concept of Judicial Review borrowed?',
            back: 'USA.'
          },
          {
            id: 'src-13',
            front: 'From which country were Directive Principles of State Policy (DPSP) borrowed?',
            back: 'Ireland (Irish Constitution).'
          },
          {
            id: 'src-14',
            front: 'From which country was the Concurrent List borrowed?',
            back: 'Australia.'
          },
          {
            id: 'src-15',
            front: 'From which country was the concept of Fundamental Duties borrowed?',
            back: 'USSR.'
          },
          {
            id: 'src-16',
            front: 'Which is the single largest source of the Indian Constitution?',
            back: 'The Government of India Act, 1935 — it provided the federal scheme, judiciary structure, governor\'s office, PSC, emergency provisions, and administrative details.'
          },
        ],
        quiz: [
          {
            id: 'src-q1',
            question: 'The concept of Fundamental Rights was borrowed from:',
            options: ['British Constitution', 'US Constitution', 'Irish Constitution', 'French Constitution'],
            correct: 1,
            explanation: 'Fundamental Rights, Independent Judiciary, Judicial Review, Impeachment of President, and Post of Vice-President were borrowed from the US Constitution.'
          },
          {
            id: 'src-q2',
            question: 'Directive Principles of State Policy (DPSP) were borrowed from:',
            options: ['USA', 'Canada', 'Ireland', 'Australia'],
            correct: 2,
            explanation: 'DPSP, method of election of President, and nomination of members to Rajya Sabha were borrowed from the Irish Constitution.'
          },
          {
            id: 'src-q3',
            question: 'The Concurrent List was borrowed from which country\'s constitution?',
            options: ['USA', 'Canada', 'Australia', 'South Africa'],
            correct: 2,
            explanation: 'Concurrent List, Joint sitting of both Houses of Parliament, and Freedom of trade, commerce and inter-course were borrowed from Australia.'
          },
          {
            id: 'src-q4',
            question: 'The concept of "Federation with a strong centre" was borrowed from:',
            options: ['USA', 'Australia', 'Canada', 'Germany'],
            correct: 2,
            explanation: 'Federation with a strong centre, Residuary powers to the centre, Appointment of State Governors by the Centre, and Advisory Jurisdiction of the Supreme Court were borrowed from Canada.'
          },
          {
            id: 'src-q5',
            question: 'Suspension of Fundamental Rights during Emergency was inspired by:',
            options: ['USSR', 'France', 'Germany (Weimar Constitution)', 'Japan'],
            correct: 2,
            explanation: 'The concept of Suspension of Fundamental Rights during Emergency was borrowed from the Weimar Constitution of Germany.'
          },
          {
            id: 'src-q6',
            question: 'The ideals of Liberty, Equality and Fraternity in the Preamble were borrowed from:',
            options: ['USA', 'UK', 'France', 'USSR'],
            correct: 2,
            explanation: 'Republic and the Ideals of Liberty, Equality and Fraternity in the Preamble were borrowed from the French Constitution.'
          },
          {
            id: 'src-q7',
            question: 'Fundamental Duties were borrowed from:',
            options: ['France', 'Japan', 'USSR', 'Germany'],
            correct: 2,
            explanation: 'Fundamental Duties and the ideal of Justice (Social, Economic and Political) in the Preamble were borrowed from the USSR Constitution.'
          },
          {
            id: 'src-q8',
            question: '"Procedure Established by Law" was borrowed from:',
            options: ['USA', 'UK', 'Japan', 'France'],
            correct: 2,
            explanation: 'The Procedure Established by Law was borrowed from the Japanese Constitution.'
          },
          {
            id: 'src-q9',
            question: 'The procedure for Amendment of the Constitution was borrowed from:',
            options: ['USA', 'Australia', 'Canada', 'South Africa'],
            correct: 3,
            explanation: 'Procedure for Amendment of the Constitution and election of members of Rajya Sabha were borrowed from the South African Constitution.'
          },
          {
            id: 'src-q10',
            question: 'Which is the single largest source of the Indian Constitution?',
            options: ['British Constitution', 'US Constitution', 'Government of India Act, 1935', 'Irish Constitution'],
            correct: 2,
            explanation: 'The Government of India Act, 1935 is the single largest source — it provided the federal scheme, judiciary, governor\'s office, PSC, emergency provisions, and administrative details.'
          },
          {
            id: 'src-q11',
            question: 'The Parliamentary system of government was borrowed from:',
            options: ['USA', 'Britain', 'Canada', 'France'],
            correct: 1,
            explanation: 'Parliamentary government, Rule of Law, Single Citizenship, Cabinet System, Parliamentary privileges, Bicameralism, and Prerogative writs were borrowed from Britain.'
          },
          {
            id: 'src-q12',
            question: 'The method of election of the President was borrowed from:',
            options: ['USA', 'France', 'Ireland', 'South Africa'],
            correct: 2,
            explanation: 'The method of election of President was borrowed from the Irish Constitution, along with DPSP and nomination of Rajya Sabha members.'
          },
        ]
      }
    ]
  },
  {
    id: 'salient-features',
    name: 'Salient Features of the Indian Constitution',
    icon: '📜',
    subtopics: [
      {
        id: 'parts-of-constitution',
        name: 'Parts of the Indian Constitution',
        flashcards: [
          {
            id: 'parts-1',
            front: 'How many Parts does the Indian Constitution have?',
            back: '22 Parts (including Part IVA, IXA, IXB, and XIVA). Note: Part VII has been repealed.'
          },
          {
            id: 'parts-2',
            front: 'Part I of the Constitution deals with?',
            back: 'The Union and its Territories (Articles 1–4).'
          },
          {
            id: 'parts-3',
            front: 'Part II of the Constitution deals with?',
            back: 'Citizenship (Articles 5–11).'
          },
          {
            id: 'parts-4',
            front: 'Part III of the Constitution deals with?',
            back: 'Fundamental Rights (Articles 12–35).'
          },
          {
            id: 'parts-5',
            front: 'Part IV of the Constitution deals with?',
            back: 'Directive Principles of State Policy (Articles 36–51).'
          },
          {
            id: 'parts-6',
            front: 'Part IVA of the Constitution deals with?',
            back: 'Fundamental Duties (Article 51A).'
          },
          {
            id: 'parts-7',
            front: 'Part V of the Constitution deals with?',
            back: 'The Union (Articles 52–151) — covers President, Parliament, Supreme Court, CAG, etc.'
          },
          {
            id: 'parts-8',
            front: 'Part VI of the Constitution deals with?',
            back: 'The States (Articles 152–237) — covers Governor, State Legislature, High Courts, etc.'
          },
          {
            id: 'parts-9',
            front: 'What happened to Part VII of the Constitution?',
            back: 'Part VII dealt with States in Part B of the First Schedule. It was repealed by the 7th Constitutional Amendment Act, 1956.'
          },
          {
            id: 'parts-10',
            front: 'Part VIII of the Constitution deals with?',
            back: 'The Union Territories (Articles 239–242).'
          },
          {
            id: 'parts-11',
            front: 'Part IX, IXA, and IXB deal with?',
            back: 'Part IX: The Panchayats (Articles 243–243O)\nPart IXA: The Municipalities (Articles 243P–243ZG)\nPart IXB: The Co-operative Societies (Articles 243ZH–243ZT)'
          },
          {
            id: 'parts-12',
            front: 'Part X of the Constitution deals with?',
            back: 'The Scheduled and Tribal Areas (Articles 244–244A).'
          },
          {
            id: 'parts-13',
            front: 'Part XI of the Constitution deals with?',
            back: 'Relations between the Union and the States (Articles 245–263).'
          },
          {
            id: 'parts-14',
            front: 'Part XII of the Constitution deals with?',
            back: 'Finance, Property, Contracts and Suits (Articles 264–300A).'
          },
          {
            id: 'parts-15',
            front: 'Part XIII of the Constitution deals with?',
            back: 'Trade, Commerce and Intercourse within the territory of India (Articles 301–307).'
          },
          {
            id: 'parts-16',
            front: 'Part XIV and XIVA deal with?',
            back: 'Part XIV: Services Under the Union and the States (Articles 308–323)\nPart XIVA: Tribunals (Articles 323A–323B)'
          },
          {
            id: 'parts-17',
            front: 'Part XV of the Constitution deals with?',
            back: 'Elections (Articles 324–329A).'
          },
          {
            id: 'parts-18',
            front: 'Part XVI of the Constitution deals with?',
            back: 'Special provisions relating to certain classes (Articles 330–342).'
          },
          {
            id: 'parts-19',
            front: 'Part XVII of the Constitution deals with?',
            back: 'Official Language (Articles 343–351).'
          },
          {
            id: 'parts-20',
            front: 'Part XVIII of the Constitution deals with?',
            back: 'Emergency Provisions (Articles 352–360).'
          },
          {
            id: 'parts-21',
            front: 'Part XIX of the Constitution deals with?',
            back: 'Miscellaneous (Articles 361–367).'
          },
          {
            id: 'parts-22',
            front: 'Part XX of the Constitution deals with?',
            back: 'Amendment of the Constitution (Article 368).'
          },
          {
            id: 'parts-23',
            front: 'Part XXI of the Constitution deals with?',
            back: 'Temporary, Transitional and Special Provisions (Articles 369–392).'
          },
          {
            id: 'parts-24',
            front: 'Part XXII of the Constitution deals with?',
            back: 'Short Title, Commencement, Authoritative Text in Hindi and Repeals (Articles 393–395).'
          },
          {
            id: 'parts-25',
            front: 'Which Part contains Article 368 (Amendment procedure)?',
            back: 'Part XX.'
          },
          {
            id: 'parts-26',
            front: 'Which Part contains Emergency Provisions?',
            back: 'Part XVIII (Articles 352–360).'
          },
          {
            id: 'parts-27',
            front: 'Which Part deals with Panchayats and which with Municipalities?',
            back: 'Panchayats: Part IX (Articles 243–243O)\nMunicipalities: Part IXA (Articles 243P–243ZG)'
          },
        ],
        quiz: [
          {
            id: 'parts-q1',
            question: 'Fundamental Rights are contained in which Part of the Constitution?',
            options: ['Part II', 'Part III', 'Part IV', 'Part IVA'],
            correct: 1,
            explanation: 'Fundamental Rights are in Part III (Articles 12–35). Part IV is DPSP and Part IVA is Fundamental Duties.'
          },
          {
            id: 'parts-q2',
            question: 'Directive Principles of State Policy are in which Part?',
            options: ['Part III', 'Part IV', 'Part IVA', 'Part V'],
            correct: 1,
            explanation: 'DPSP is in Part IV (Articles 36–51).'
          },
          {
            id: 'parts-q3',
            question: 'Which Part of the Constitution has been repealed?',
            options: ['Part VI', 'Part VII', 'Part VIII', 'Part IX'],
            correct: 1,
            explanation: 'Part VII (States in Part B of the First Schedule) was repealed by the 7th Constitutional Amendment Act, 1956.'
          },
          {
            id: 'parts-q4',
            question: 'The Panchayats are dealt with in:',
            options: ['Part VIII', 'Part IX', 'Part IXA', 'Part X'],
            correct: 1,
            explanation: 'Part IX deals with Panchayats (Articles 243–243O). Part IXA deals with Municipalities.'
          },
          {
            id: 'parts-q5',
            question: 'Article 368 (Amendment of the Constitution) falls under which Part?',
            options: ['Part XVIII', 'Part XIX', 'Part XX', 'Part XXI'],
            correct: 2,
            explanation: 'Article 368 falls under Part XX which deals with Amendment of the Constitution.'
          },
          {
            id: 'parts-q6',
            question: 'Emergency Provisions are contained in:',
            options: ['Part XVI', 'Part XVII', 'Part XVIII', 'Part XIX'],
            correct: 2,
            explanation: 'Emergency Provisions are in Part XVIII (Articles 352–360).'
          },
          {
            id: 'parts-q7',
            question: 'Part IVA dealing with Fundamental Duties contains which Article?',
            options: ['Article 50', 'Article 51', 'Article 51A', 'Article 52'],
            correct: 2,
            explanation: 'Part IVA contains Article 51A which lists the Fundamental Duties.'
          },
          {
            id: 'parts-q8',
            question: 'Relations between the Union and the States are dealt with in:',
            options: ['Part X', 'Part XI', 'Part XII', 'Part XIII'],
            correct: 1,
            explanation: 'Part XI deals with Relations between the Union and the States (Articles 245–263).'
          },
          {
            id: 'parts-q9',
            question: 'The Co-operative Societies are dealt with in which Part?',
            options: ['Part IX', 'Part IXA', 'Part IXB', 'Part X'],
            correct: 2,
            explanation: 'Part IXB deals with Co-operative Societies (Articles 243ZH–243ZT).'
          },
          {
            id: 'parts-q10',
            question: 'Citizenship is dealt with in which Part and Articles?',
            options: ['Part I, Articles 1–4', 'Part II, Articles 5–11', 'Part III, Articles 12–35', 'Part IV, Articles 36–51'],
            correct: 1,
            explanation: 'Citizenship is dealt with in Part II (Articles 5–11).'
          },
          {
            id: 'parts-q11',
            question: 'Elections are covered under which Part of the Constitution?',
            options: ['Part XIV', 'Part XIVA', 'Part XV', 'Part XVI'],
            correct: 2,
            explanation: 'Elections are covered under Part XV (Articles 324–329A).'
          },
          {
            id: 'parts-q12',
            question: 'Official Language is dealt with in:',
            options: ['Part XV', 'Part XVI', 'Part XVII', 'Part XVIII'],
            correct: 2,
            explanation: 'Official Language is dealt with in Part XVII (Articles 343–351).'
          },
        ]
      },
      {
        id: 'schedules-of-constitution',
        name: 'Schedules of the Indian Constitution',
        flashcards: [
          {
            id: 'sch-1',
            front: 'How many Schedules does the Indian Constitution currently have?',
            back: '12 Schedules (originally 8; Schedules 9–12 were added by amendments).'
          },
          {
            id: 'sch-2',
            front: 'What does the First Schedule contain?',
            back: 'Lists the States and Union Territories along with their territories. Currently includes 28 States and 8 Union Territories. Related Articles: 1 and 4.'
          },
          {
            id: 'sch-3',
            front: 'What does the Second Schedule contain?',
            back: 'Provisions for emoluments, allowances, and privileges for the President, Governors, Speaker & Deputy Speaker of Lok Sabha, Chairman & Deputy Chairman of Rajya Sabha, Speaker & Deputy Speaker of State Legislative Assembly, Chairman & Deputy Chairman of State Legislative Council, Judges of SC & HC, and CAG. Related Articles: 75(4), 99, 124(6), 148(2), 164(3), 188 and 219.'
          },
          {
            id: 'sch-4',
            front: 'What does the Third Schedule contain?',
            back: 'Forms of oaths or affirmations for:\n- Union and State Ministers\n- Candidates for election to Parliament and State Legislature\n- Members of Parliament and State Legislature\n- Judges of SC and HC\n- CAG\nNote: An oath is under invocation of God; an affirmation is a non-religious pledge.'
          },
          {
            id: 'sch-5',
            front: 'What does the Fourth Schedule contain?',
            back: 'The number of seats allocated to each state and union territory in the Council of States (Rajya Sabha). Related Articles: 4(1) and 80(2).'
          },
          {
            id: 'sch-6',
            front: 'What does the Fifth Schedule provide for?',
            back: 'Administration of Scheduled Areas in certain states. Related Article: 244.'
          },
          {
            id: 'sch-7',
            front: 'What does the Sixth Schedule focus on?',
            back: 'Administering Tribal Areas in the states of Assam, Meghalaya, Tripura, and Mizoram. Related Articles: 244(2) and 275(1).'
          },
          {
            id: 'sch-8',
            front: 'What does the Seventh Schedule contain?',
            back: 'Three lists for legislative authority:\n- Union List: National importance (defence, foreign affairs)\n- State List: Local subjects (police, public health)\n- Concurrent List: Joint subjects (education)\nNote: Parliament can legislate on residuary subjects; Union List prevails over State & Concurrent List; Central law takes precedence unless state law is approved by President. Related Article: 246.'
          },
          {
            id: 'sch-9',
            front: 'What does the Eighth Schedule list?',
            back: 'Recognized languages of India. Originally 14, now 22 languages. Related Articles: 344(1) and 351.'
          },
          {
            id: 'sch-10',
            front: 'Name all 22 languages in the Eighth Schedule.',
            back: 'Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santhali, Sindhi, Tamil, Telugu, Urdu.'
          },
          {
            id: 'sch-11',
            front: 'Which languages were added to the Eighth Schedule and when?',
            back: '- Sindhi: 21st CAA, 1967\n- Konkani, Manipuri, Nepali: 71st CAA, 1992\n- Bodo, Dongri, Maithili, Santhali: 92nd CAA, 2003\n- Oriya renamed as "Odia": 96th CAA, 2011'
          },
          {
            id: 'sch-12',
            front: 'What does the Ninth Schedule contain?',
            back: 'Acts and Regulations of State legislatures dealing with land reforms and abolition of the zamindari system. Added by the 1st Amendment (1951) under J.L. Nehru to protect the laws from judicial review. However, after the I.R. Coelho Case, SC ruled that laws included after April 24, 1973 are now open to judicial review. Originally 13 acts, now 282 acts. Related Article: 31B.'
          },
          {
            id: 'sch-13',
            front: 'What does the Tenth Schedule contain?',
            back: 'Provisions regarding disqualification of Parliament and State Legislature members on grounds of defection (Anti-defection Law). Added by the 52nd Amendment (1985). Related Articles: 102(2) and 191(2).'
          },
          {
            id: 'sch-14',
            front: 'What does the Eleventh Schedule contain?',
            back: 'Powers, authority, and responsibilities of Panchayats. Contains 29 functional items including agriculture, land improvement, land reforms, land consolidation, etc. Added by the 73rd Amendment (1992). Related Article: 243G.'
          },
          {
            id: 'sch-15',
            front: 'What does the Twelfth Schedule contain?',
            back: 'Powers, authorities, and responsibilities of Municipalities. Contains 18 functional items including urban planning, town planning, regulation of land use, etc. Added by the 74th Amendment (1992). Related Article: 243W.'
          },
          {
            id: 'sch-16',
            front: 'Which Schedule deals with the Anti-defection Law?',
            back: 'Tenth Schedule (added by 52nd Amendment, 1985).'
          },
          {
            id: 'sch-17',
            front: 'Which Schedule contains the three legislative lists (Union, State, Concurrent)?',
            back: 'Seventh Schedule (Article 246).'
          },
          {
            id: 'sch-18',
            front: 'Which amendment added the Ninth Schedule and why?',
            back: '1st Amendment (1951) under PM Jawaharlal Nehru, to protect land reform laws from judicial review on grounds of violation of Fundamental Rights.'
          },
        ],
        quiz: [
          {
            id: 'sch-q1',
            question: 'How many Schedules does the Indian Constitution currently have?',
            options: ['8', '10', '12', '14'],
            correct: 2,
            explanation: 'The Indian Constitution currently has 12 Schedules (originally 8).'
          },
          {
            id: 'sch-q2',
            question: 'The Seventh Schedule contains:',
            options: ['Recognized languages', 'Three legislative lists', 'Oaths and affirmations', 'Anti-defection provisions'],
            correct: 1,
            explanation: 'The Seventh Schedule contains three lists — Union List, State List, and Concurrent List (Article 246).'
          },
          {
            id: 'sch-q3',
            question: 'The Anti-defection Law is contained in which Schedule?',
            options: ['Eighth Schedule', 'Ninth Schedule', 'Tenth Schedule', 'Eleventh Schedule'],
            correct: 2,
            explanation: 'The Tenth Schedule deals with disqualification on grounds of defection, added by the 52nd Amendment (1985).'
          },
          {
            id: 'sch-q4',
            question: 'How many languages are currently recognized in the Eighth Schedule?',
            options: ['14', '18', '22', '24'],
            correct: 2,
            explanation: 'The Eighth Schedule currently lists 22 recognized languages (originally 14).'
          },
          {
            id: 'sch-q5',
            question: 'The Ninth Schedule was added by which Amendment?',
            options: ['1st Amendment (1951)', '42nd Amendment (1976)', '52nd Amendment (1985)', '73rd Amendment (1992)'],
            correct: 0,
            explanation: 'The Ninth Schedule was added by the 1st Amendment (1951) under PM Nehru to protect land reform laws from judicial review.'
          },
          {
            id: 'sch-q6',
            question: 'The Eleventh Schedule (Panchayats) was added by:',
            options: ['52nd Amendment', '73rd Amendment', '74th Amendment', '92nd Amendment'],
            correct: 1,
            explanation: 'The Eleventh Schedule was added by the 73rd Amendment (1992) detailing powers and responsibilities of Panchayats with 29 functional items.'
          },
          {
            id: 'sch-q7',
            question: 'The Twelfth Schedule (Municipalities) contains how many functional items?',
            options: ['14', '18', '22', '29'],
            correct: 1,
            explanation: 'The Twelfth Schedule contains 18 functional items for Municipalities, added by the 74th Amendment (1992).'
          },
          {
            id: 'sch-q8',
            question: 'Which Schedule deals with allocation of seats in Rajya Sabha?',
            options: ['First Schedule', 'Second Schedule', 'Fourth Schedule', 'Seventh Schedule'],
            correct: 2,
            explanation: 'The Fourth Schedule details the number of seats allocated to each state and UT in Rajya Sabha.'
          },
          {
            id: 'sch-q9',
            question: 'Sindhi was added to the Eighth Schedule by:',
            options: ['71st CAA, 1992', '21st CAA, 1967', '92nd CAA, 2003', '96th CAA, 2011'],
            correct: 1,
            explanation: 'Sindhi was added to the Eighth Schedule by the 21st Constitutional Amendment Act, 1967.'
          },
          {
            id: 'sch-q10',
            question: 'The Sixth Schedule deals with administration of Tribal Areas in:',
            options: [
              'All states of India',
              'Assam, Meghalaya, Tripura, and Mizoram',
              'Only North-Eastern states',
              'Scheduled Areas in all states'
            ],
            correct: 1,
            explanation: 'The Sixth Schedule focuses on administering Tribal Areas in Assam, Meghalaya, Tripura, and Mizoram.'
          },
          {
            id: 'sch-q11',
            question: 'After the I.R. Coelho Case, what happened to laws in the Ninth Schedule?',
            options: [
              'All laws became immune from judicial review',
              'Laws added after April 24, 1973 are open to judicial review',
              'The entire Ninth Schedule was struck down',
              'Only land reform laws remained protected'
            ],
            correct: 1,
            explanation: 'The Supreme Court ruled in the I.R. Coelho Case that laws included in the Ninth Schedule after April 24, 1973 are open to judicial review.'
          },
          {
            id: 'sch-q12',
            question: 'Bodo, Dongri, Maithili, and Santhali were added to the Eighth Schedule by:',
            options: ['71st CAA, 1992', '86th CAA, 2002', '92nd CAA, 2003', '96th CAA, 2011'],
            correct: 2,
            explanation: 'Bodo, Dongri, Maithili, and Santhali were added by the 92nd Constitutional Amendment Act, 2003.'
          },
        ]
      },
      {
        id: 'types-of-majorities',
        name: 'Types of Majorities in Parliament',
        flashcards: [
          {
            id: 'maj-1',
            front: 'What is Simple Majority?',
            back: 'Majority of the members present and voting. NOT considered under Article 368.\nExample: SC judges increased from 31 to 34 by the Supreme Court (Number of Judges) Amendment Act, 2019.'
          },
          {
            id: 'maj-2',
            front: 'What is Absolute Majority?',
            back: 'Majority of the total membership of the House, regardless of vacancies or absent members.'
          },
          {
            id: 'maj-3',
            front: 'What is Effective Majority?',
            back: 'Majority of the effective strength of the House (i.e. Total Strength minus vacancies).\nExample: Removal of chair of house.'
          },
          {
            id: 'maj-4',
            front: 'What is Special Majority as per Article 249?',
            back: 'Majority of not less than 2/3 of the members present and voting.'
          },
          {
            id: 'maj-5',
            front: 'What is Special Majority under Article 368?',
            back: 'Majority of the total membership (irrespective of vacancies/absentees) AND by a majority of not less than 2/3 of members present and voting.\nExample: 103rd Amendment to provide 10% reservation to EWS.'
          },
          {
            id: 'maj-6',
            front: 'What is Special Majority under Article 61?',
            back: 'Majority of not less than 2/3 of the total membership of the House.'
          },
          {
            id: 'maj-7',
            front: 'What is Special Majority of Parliament & Consent of States?',
            back: 'Special majority + Ratification of half (50%) of the state legislatures by a simple majority. Most federal provisions are amended by this method.\nNo time limit for states to give consent. If some states take no action, it doesn\'t matter — the moment half give consent, the formality is completed.\nExample: 101st Amendment related to GST.'
          },
          {
            id: 'maj-8',
            front: 'Which type of majority is used for Constitutional Amendments under Article 368?',
            back: 'Special Majority under Article 368: Majority of total membership + not less than 2/3 of members present and voting. Some amendments additionally require ratification by half the state legislatures.'
          },
          {
            id: 'maj-9',
            front: 'What is the difference between Simple Majority and Absolute Majority?',
            back: 'Simple Majority = majority of members present and voting (ignores absentees).\nAbsolute Majority = majority of total membership of the House (includes absentees).'
          },
          {
            id: 'maj-10',
            front: 'What is the difference between Effective Majority and Absolute Majority?',
            back: 'Absolute Majority = total membership (including vacancies).\nEffective Majority = total strength minus vacancies (excludes vacant seats).'
          },
          {
            id: 'maj-11',
            front: 'Is there a time limit for state legislatures to ratify a Constitutional Amendment?',
            back: 'No. There is no time limit. If one or some or all remaining states take no action, it doesn\'t matter. The moment half of the states give consent, the formality is completed.'
          },
        ],
        quiz: [
          {
            id: 'maj-q1',
            question: 'Simple Majority means:',
            options: [
              'Majority of total membership of the House',
              'Majority of members present and voting',
              '2/3 of members present and voting',
              '2/3 of total membership'
            ],
            correct: 1,
            explanation: 'Simple Majority is the majority of members present and voting. It is not considered under Article 368.'
          },
          {
            id: 'maj-q2',
            question: 'Special Majority under Article 368 requires:',
            options: [
              'Majority of members present and voting',
              '2/3 of members present and voting only',
              'Majority of total membership AND 2/3 of members present and voting',
              '2/3 of total membership'
            ],
            correct: 2,
            explanation: 'Article 368 requires majority of total membership (irrespective of vacancies) AND not less than 2/3 of members present and voting.'
          },
          {
            id: 'maj-q3',
            question: 'Effective Majority is calculated as:',
            options: [
              'Total membership including vacancies',
              'Members present and voting',
              'Total strength minus vacancies',
              '2/3 of total membership'
            ],
            correct: 2,
            explanation: 'Effective Majority = Total Strength minus vacancies. Example: Removal of chair of house.'
          },
          {
            id: 'maj-q4',
            question: 'For amendments requiring state ratification, how many state legislatures must ratify?',
            options: ['All states', '2/3 of states', 'Half (50%) of states', '1/3 of states'],
            correct: 2,
            explanation: 'Half (50%) of state legislatures must ratify by simple majority. There is no time limit for this ratification.'
          },
          {
            id: 'maj-q5',
            question: 'The 103rd Amendment (10% EWS reservation) was passed by:',
            options: [
              'Simple Majority',
              'Absolute Majority',
              'Special Majority under Article 368',
              'Special Majority with state ratification'
            ],
            correct: 2,
            explanation: 'The 103rd Amendment was passed by Special Majority under Article 368 — majority of total membership AND 2/3 of members present and voting.'
          },
          {
            id: 'maj-q6',
            question: 'Special Majority under Article 249 requires:',
            options: [
              'Majority of members present and voting',
              'Not less than 2/3 of members present and voting',
              'Majority of total membership',
              '2/3 of total membership'
            ],
            correct: 1,
            explanation: 'Article 249 requires a majority of not less than 2/3 of the members present and voting.'
          },
          {
            id: 'maj-q7',
            question: 'The 101st Amendment (GST) was passed by which type of majority?',
            options: [
              'Simple Majority',
              'Special Majority under Article 368',
              'Special Majority under Article 61',
              'Special Majority of Parliament & Consent of States'
            ],
            correct: 3,
            explanation: 'The 101st Amendment (GST) required Special Majority of Parliament plus ratification by half the state legislatures, as it affected federal provisions.'
          },
          {
            id: 'maj-q8',
            question: 'Special Majority under Article 61 is used for:',
            options: [
              'Constitutional amendments',
              'Impeachment of the President',
              'Removal of judges',
              'Passing money bills'
            ],
            correct: 1,
            explanation: 'Article 61 deals with the impeachment of the President, requiring a majority of not less than 2/3 of the total membership of the House.'
          },
          {
            id: 'maj-q9',
            question: 'Is there a time limit for state legislatures to ratify a Constitutional Amendment?',
            options: [
              'Yes, within 6 months',
              'Yes, within 1 year',
              'No time limit',
              'Yes, within the current session'
            ],
            correct: 2,
            explanation: 'There is no time limit for state legislatures to ratify. The formality is completed the moment half of the states give consent.'
          },
          {
            id: 'maj-q10',
            question: 'Which majority is NOT considered under Article 368?',
            options: ['Absolute Majority', 'Simple Majority', 'Effective Majority', 'Special Majority under Article 249'],
            correct: 1,
            explanation: 'Simple Majority (majority of members present and voting) is not considered under Article 368 for constitutional amendments.'
          },
        ]
      },
      {
        id: 'major-constitutional-amendments',
        name: 'Major Constitutional Amendments at a Glance',
        flashcards: [
          {
            id: 'mca-1',
            front: 'What were the key provisions of the 7th CAA, 1956?',
            back: '- Extended jurisdiction of High Courts to Union Territories\n- Provision for additional and acting judges of HC\n- Common High Court for two or more states introduced\n- Abolished Class A, B, C, D states → reorganised into 14 States and 6 UTs\n- Article 153: Governor for each State; proviso for common Governor for 2+ States'
          },
          {
            id: 'mca-2',
            front: 'What did the 24th CAA, 1971 do?',
            back: '- Affirmed Parliament\'s power to amend any part of the Constitution, including Fundamental Rights\n- Made it compulsory for the President to give assent to a Constitutional Amendment Bill'
          },
          {
            id: 'mca-3',
            front: 'What did the 25th CAA, 1971 do?',
            back: 'Limited the right to property and protected laws under Article 39(b) or (c) from challenges based on Articles 14, 19, and 31.'
          },
          {
            id: 'mca-4',
            front: 'Why is the 42nd CAA, 1976 called the "Mini Constitution"?',
            back: 'Because it made the most extensive changes to the Constitution — affecting the Preamble, Fundamental Rights, DPSPs, Fundamental Duties, judiciary, federalism, elections, Parliament, and emergency provisions.'
          },
          {
            id: 'mca-5',
            front: 'What three words were added to the Preamble by the 42nd CAA?',
            back: 'Socialist, Secular, and Integrity.'
          },
          {
            id: 'mca-6',
            front: 'What did the 42nd CAA do regarding Fundamental Duties?',
            back: 'Added Fundamental Duties by the citizens under a new Part IVA (Article 51A).'
          },
          {
            id: 'mca-7',
            front: 'Which four new DPSPs were added by the 42nd CAA?',
            back: '1. Healthy development of children (Art 39)\n2. Equal justice and free legal aid (Art 39A)\n3. Participation of workers in management of industries (Art 43A)\n4. Protection of environment, forests, and wildlife (Art 48A)'
          },
          {
            id: 'mca-8',
            front: 'What did the 42nd CAA do regarding DPSPs vs Fundamental Rights?',
            back: 'Established DPSPs as superior to Fundamental Rights.'
          },
          {
            id: 'mca-9',
            front: 'Which five subjects were shifted to the Concurrent List by the 42nd CAA?',
            back: '1. Education\n2. Forests\n3. Weights & Measures\n4. Protection of Wild Animals and Birds\n5. Administration of Justice'
          },
          {
            id: 'mca-10',
            front: 'What changes did the 42nd CAA make to emergency provisions?',
            back: 'Allowed localised emergencies and extended President\'s rule to one year.'
          },
          {
            id: 'mca-11',
            front: 'What were the key provisions of the 44th CAA, 1978?',
            back: '- Replaced "internal disturbance" with "armed rebellion" for national emergency\n- President must declare emergency only on written recommendation of cabinet\n- Deleted right to property from FRs (made it only a legal right)\n- Art 20 and 21 cannot be suspended during national emergency'
          },
          {
            id: 'mca-12',
            front: 'What did the 44th CAA do to the right to property?',
            back: 'Deleted the right to property from the list of Fundamental Rights and made it only a legal right (not a Fundamental Right).'
          },
          {
            id: 'mca-13',
            front: 'Which Fundamental Rights cannot be suspended even during a national emergency (after 44th CAA)?',
            back: 'Article 20 (Protection in respect of conviction for offences) and Article 21 (Right to Life and Personal Liberty).'
          },
          {
            id: 'mca-14',
            front: 'How did the 44th CAA change the grounds for declaring national emergency?',
            back: 'Replaced "internal disturbance" with "armed rebellion" — making it harder to declare emergency on internal grounds.'
          },
          {
            id: 'mca-15',
            front: 'What did the 42nd CAA change that the 44th CAA reversed or modified?',
            back: '42nd gave unrestricted power to Parliament → 44th restored some checks.\n42nd allowed emergency for "internal disturbance" → 44th changed to "armed rebellion".\n42nd limited judicial review → 44th partially restored it.\n42nd made right to property weak → 44th removed it from FRs entirely.'
          },
          {
            id: 'mca-16',
            front: 'What did the 52nd CAA, 1985 do?',
            back: 'Provided for disqualification of members of Parliament and state legislatures on grounds of defection. Added the Tenth Schedule (Anti-Defection Law).'
          },
          {
            id: 'mca-17',
            front: 'What did the 91st CAA, 2001 do?',
            back: 'Strengthened anti-defection laws by removing exceptions for splits (previously, 1/3 of members splitting was allowed).'
          },
          {
            id: 'mca-18',
            front: 'What did the 101st CAA, 2017 introduce?',
            back: 'Introduced the Goods and Services Tax (GST) in the country from 1st July 2017.'
          },
          {
            id: 'mca-19',
            front: 'What did the 102nd CAA, 2018 do?',
            back: 'Gave Constitutional status to the National Commission for Backward Classes (NCBC) — Article 338B.'
          },
          {
            id: 'mca-20',
            front: 'What did the 103rd CAA, 2019 provide?',
            back: 'Maximum 10% reservation for Economically Weaker Sections (EWS). Introduced Articles 15(6) and 16(6). Applies to non-OBC and non-SC/ST groups in admissions and government jobs, excluding minority-run institutions. Upheld by SC with 3:2 majority.'
          },
          {
            id: 'mca-21',
            front: 'What did the 104th CAA, 2020 do?',
            back: '- Extended reservation of seats for SCs and STs in Lok Sabha and state assemblies until 2030\n- Discontinued special representation for the Anglo-Indian community'
          },
          {
            id: 'mca-22',
            front: 'What did the 105th CAA, 2021 do?',
            back: 'Exempted state governments from consulting NCBC regarding preparation and maintenance of the list of Socially and Educationally Backward Classes (SEBCs) for their own purposes.'
          },
          {
            id: 'mca-23',
            front: 'What did the 106th CAA, 2023 do?',
            back: 'Reserves one-third of all seats for women in Lok Sabha, State legislative assemblies, and Legislative Assembly of NCT of Delhi, including those reserved for SCs and STs.'
          },
          {
            id: 'mca-24',
            front: 'Which amendment added "Socialist, Secular, Integrity" to the Preamble?',
            back: '42nd CAA, 1976 (Mini Constitution).'
          },
          {
            id: 'mca-25',
            front: 'Which amendment introduced GST?',
            back: '101st CAA, 2017 — GST came into effect from 1st July 2017.'
          },
          {
            id: 'mca-26',
            front: 'Which amendment is known as the Anti-Defection Law?',
            back: '52nd CAA, 1985 (added Tenth Schedule). Later strengthened by 91st CAA, 2001.'
          },
          {
            id: 'mca-27',
            front: 'Which amendment introduced EWS reservation?',
            back: '103rd CAA, 2019 — 10% reservation for EWS (Articles 15(6) and 16(6)).'
          },
          {
            id: 'mca-28',
            front: 'Which amendment introduced women\'s reservation in legislatures?',
            back: '106th CAA, 2023 — one-third seats reserved for women in Lok Sabha, State assemblies, and Delhi Assembly.'
          },
        ],
        quiz: [
          {
            id: 'mca-q1',
            question: 'The 7th CAA, 1956 reorganised states into:',
            options: ['12 States and 8 UTs', '14 States and 6 UTs', '16 States and 4 UTs', '15 States and 7 UTs'],
            correct: 1,
            explanation: 'The 7th CAA abolished Class A, B, C, D states and reorganised them into 14 States and 6 Union Territories.'
          },
          {
            id: 'mca-q2',
            question: 'Which amendment made it compulsory for the President to give assent to Constitutional Amendment Bills?',
            options: ['7th CAA', '24th CAA', '42nd CAA', '44th CAA'],
            correct: 1,
            explanation: 'The 24th CAA, 1971 affirmed Parliament\'s power to amend the Constitution and made Presidential assent compulsory for Amendment Bills.'
          },
          {
            id: 'mca-q3',
            question: 'The 42nd CAA, 1976 is also known as:',
            options: ['The Reform Act', 'The Mini Constitution', 'The Restoration Act', 'The Federal Amendment'],
            correct: 1,
            explanation: 'The 42nd CAA is called the "Mini Constitution" due to the most extensive changes it made to the Constitution.'
          },
          {
            id: 'mca-q4',
            question: 'Which words were added to the Preamble by the 42nd Amendment?',
            options: [
              'Democratic, Republic, Justice',
              'Socialist, Secular, Integrity',
              'Liberty, Equality, Fraternity',
              'Sovereign, Federal, Secular'
            ],
            correct: 1,
            explanation: 'The 42nd CAA (1976) added Socialist, Secular, and Integrity to the Preamble.'
          },
          {
            id: 'mca-q5',
            question: 'The 44th CAA replaced "internal disturbance" with which term for national emergency?',
            options: ['Civil unrest', 'Armed rebellion', 'Public disorder', 'War-like situation'],
            correct: 1,
            explanation: 'The 44th CAA, 1978 replaced "internal disturbance" with "armed rebellion" making it harder to declare emergency on internal grounds.'
          },
          {
            id: 'mca-q6',
            question: 'Which Articles cannot be suspended during national emergency after the 44th CAA?',
            options: ['Articles 14 and 19', 'Articles 20 and 21', 'Articles 19 and 21', 'Articles 14 and 21'],
            correct: 1,
            explanation: 'After the 44th CAA, Articles 20 (protection from conviction) and 21 (right to life) cannot be suspended during national emergency.'
          },
          {
            id: 'mca-q7',
            question: 'The Anti-Defection Law was introduced by:',
            options: ['42nd CAA, 1976', '44th CAA, 1978', '52nd CAA, 1985', '91st CAA, 2001'],
            correct: 2,
            explanation: 'The 52nd CAA, 1985 introduced the Anti-Defection Law by adding the Tenth Schedule. The 91st CAA (2001) later strengthened it.'
          },
          {
            id: 'mca-q8',
            question: 'GST was introduced by which Constitutional Amendment?',
            options: ['99th CAA', '100th CAA', '101st CAA', '102nd CAA'],
            correct: 2,
            explanation: 'The 101st CAA, 2017 introduced GST, which came into effect on 1st July 2017.'
          },
          {
            id: 'mca-q9',
            question: 'The 103rd CAA, 2019 provides reservation for EWS of:',
            options: ['5%', '8%', '10%', '15%'],
            correct: 2,
            explanation: 'The 103rd CAA provides a maximum of 10% reservation for Economically Weaker Sections (EWS), upheld by SC with 3:2 majority.'
          },
          {
            id: 'mca-q10',
            question: 'Which amendment gave Constitutional status to NCBC?',
            options: ['101st CAA, 2017', '102nd CAA, 2018', '103rd CAA, 2019', '104th CAA, 2020'],
            correct: 1,
            explanation: 'The 102nd CAA, 2018 gave Constitutional status to the National Commission for Backward Classes (NCBC) under Article 338B.'
          },
          {
            id: 'mca-q11',
            question: 'The reservation of seats for SCs and STs was extended until 2030 by:',
            options: ['103rd CAA, 2019', '104th CAA, 2020', '105th CAA, 2021', '106th CAA, 2023'],
            correct: 1,
            explanation: 'The 104th CAA, 2020 extended SC/ST reservation in Lok Sabha and state assemblies until 2030 and discontinued Anglo-Indian representation.'
          },
          {
            id: 'mca-q12',
            question: 'The 106th CAA, 2023 reserves what fraction of seats for women?',
            options: ['One-fourth', 'One-third', 'One-half', 'Two-thirds'],
            correct: 1,
            explanation: 'The 106th CAA reserves one-third of all seats for women in Lok Sabha, State legislative assemblies, and Delhi Assembly.'
          },
          {
            id: 'mca-q13',
            question: 'Which amendment removed right to property from Fundamental Rights?',
            options: ['25th CAA, 1971', '42nd CAA, 1976', '44th CAA, 1978', '52nd CAA, 1985'],
            correct: 2,
            explanation: 'The 44th CAA, 1978 deleted right to property from Fundamental Rights and made it only a legal right.'
          },
          {
            id: 'mca-q14',
            question: 'Which five subjects were moved to the Concurrent List by the 42nd CAA?',
            options: [
              'Education, Health, Agriculture, Defence, Commerce',
              'Education, Forests, Weights & Measures, Wildlife, Administration of Justice',
              'Education, Labour, Trade, Environment, Banking',
              'Education, Forests, Police, Railways, Taxation'
            ],
            correct: 1,
            explanation: 'The 42nd CAA shifted Education, Forests, Weights & Measures, Protection of Wild Animals and Birds, and Administration of Justice to the Concurrent List.'
          },
          {
            id: 'mca-q15',
            question: 'The 91st CAA, 2001 strengthened anti-defection laws by:',
            options: [
              'Adding the Tenth Schedule',
              'Removing exceptions for splits',
              'Increasing the penalty for defection',
              'Making defection a criminal offence'
            ],
            correct: 1,
            explanation: 'The 91st CAA strengthened anti-defection laws by removing the exception that allowed 1/3 of members to split from a party without disqualification.'
          },
          {
            id: 'mca-q16',
            question: 'Which amendment made the President obligated to follow the cabinet\'s advice?',
            options: ['24th CAA', '25th CAA', '42nd CAA', '44th CAA'],
            correct: 2,
            explanation: 'The 42nd CAA, 1976 made the President obligated to follow the cabinet\'s advice regarding unrestricted amendment powers.'
          },
        ]
      },
      {
        id: 'elements-of-basic-structure',
        name: 'Elements of Basic Structure',
        flashcards: [
          {
            id: 'ebs-1',
            front: 'What is the Basic Structure Doctrine?',
            back: 'With various Supreme Court judgements, certain elements emerged as "basic features" of the Constitution that cannot be amended or destroyed by Parliament.'
          },
          {
            id: 'ebs-2',
            front: 'List the key elements of the Basic Structure.',
            back: '1. Separation of powers (legislature, executive, judiciary)\n2. Powers of SC under Articles 32, 136, 141, 142\n3. Sovereign, democratic and republican nature\n4. Balance between Fundamental Rights and DPSPs\n5. Powers of High Courts under Articles 226 and 227\n6. Limited power of Parliament to amend the Constitution\n7. Effective access to justice\n8. Principles underlying fundamental rights\n9. Federal character\n10. Secular character\n11. Welfare state (socio-economic justice)\n12. Unity and integrity of the nation\n13. Principle of equality\n14. Rule of Law\n15. Parliamentary system\n16. Judicial review\n17. Freedom and dignity of the individual\n18. Supremacy of the Constitution\n19. Free and fair elections\n20. Independence of Judiciary'
          },
          {
            id: 'ebs-3',
            front: 'Is "Separation of Powers" part of the Basic Structure?',
            back: 'Yes — separation of powers between the legislature, the executive, and the judiciary is a basic feature.'
          },
          {
            id: 'ebs-4',
            front: 'Which Articles relate to the Supreme Court\'s powers that are part of Basic Structure?',
            back: 'Articles 32 (right to constitutional remedies), 136 (special leave to appeal), 141 (law declared by SC binding), and 142 (enforcement of decrees and orders).'
          },
          {
            id: 'ebs-5',
            front: 'Is Judicial Review part of the Basic Structure?',
            back: 'Yes. Judicial review is a basic feature of the Constitution and cannot be taken away by amendment.'
          },
          {
            id: 'ebs-6',
            front: 'Is the Federal Character of the Constitution part of the Basic Structure?',
            back: 'Yes. The federal character of the Constitution is a basic feature.'
          },
          {
            id: 'ebs-7',
            front: 'Is the Secular Character of the Constitution part of the Basic Structure?',
            back: 'Yes. The secular character of the Constitution is a basic feature.'
          },
          {
            id: 'ebs-8',
            front: 'Is the Parliamentary System part of the Basic Structure?',
            back: 'Yes. The parliamentary system is a basic feature of the Constitution.'
          },
          {
            id: 'ebs-9',
            front: 'Is Free and Fair Elections part of the Basic Structure?',
            back: 'Yes. Free and fair elections is a basic feature of the Constitution.'
          },
          {
            id: 'ebs-10',
            front: 'Is the "Balance between Fundamental Rights and DPSPs" part of the Basic Structure?',
            back: 'Yes. The balance (harmony) between Fundamental Rights and Directive Principles is a basic feature.'
          },
          {
            id: 'ebs-11',
            front: 'Which High Court Articles are part of the Basic Structure?',
            back: 'Articles 226 (power to issue writs) and 227 (power of superintendence over subordinate courts).'
          },
          {
            id: 'ebs-12',
            front: 'Is Parliament\'s power to amend the Constitution unlimited?',
            back: 'No. "Limited power of Parliament to amend the Constitution" is itself a basic feature. Parliament cannot destroy the basic structure through amendments.'
          },
        ],
        quiz: [
          {
            id: 'ebs-q1',
            question: 'Which of the following is NOT an element of the Basic Structure?',
            options: [
              'Judicial review',
              'Parliamentary system',
              'Right to property',
              'Secular character'
            ],
            correct: 2,
            explanation: 'Right to property was removed from Fundamental Rights by the 44th CAA and is not part of the basic structure. It is only a legal right now.'
          },
          {
            id: 'ebs-q2',
            question: 'The Basic Structure Doctrine means:',
            options: [
              'Parliament can amend any part of the Constitution',
              'Certain features of the Constitution cannot be amended or destroyed',
              'Only the Supreme Court can amend the Constitution',
              'The President can veto any amendment'
            ],
            correct: 1,
            explanation: 'The Basic Structure Doctrine holds that certain "basic features" of the Constitution cannot be amended or destroyed by Parliament.'
          },
          {
            id: 'ebs-q3',
            question: 'Which Articles relate to Supreme Court powers that are part of Basic Structure?',
            options: [
              'Articles 14, 19, 21',
              'Articles 32, 136, 141, 142',
              'Articles 226, 227',
              'Articles 352, 356, 360'
            ],
            correct: 1,
            explanation: 'Articles 32 (constitutional remedies), 136 (special leave), 141 (binding law), and 142 (enforcement) relate to SC powers that are basic features.'
          },
          {
            id: 'ebs-q4',
            question: 'Which of the following IS a basic feature of the Constitution?',
            options: [
              'Reservation in government jobs',
              'Right to property',
              'Free and fair elections',
              'Uniform Civil Code'
            ],
            correct: 2,
            explanation: 'Free and fair elections is a recognized basic feature of the Constitution.'
          },
          {
            id: 'ebs-q5',
            question: '"Limited power of Parliament to amend the Constitution" is:',
            options: [
              'Not a basic feature',
              'A basic feature itself',
              'Only applicable during emergency',
              'Applicable only to Part III'
            ],
            correct: 1,
            explanation: 'The limited power of Parliament to amend the Constitution is itself a basic feature — Parliament cannot grant itself unlimited amending power.'
          },
          {
            id: 'ebs-q6',
            question: 'Which of the following pairs are BOTH basic features?',
            options: [
              'Right to property and Judicial review',
              'Parliamentary system and Presidential system',
              'Separation of powers and Independence of Judiciary',
              'Uniform Civil Code and Secular character'
            ],
            correct: 2,
            explanation: 'Both separation of powers and independence of judiciary are recognized basic features of the Constitution.'
          },
          {
            id: 'ebs-q7',
            question: 'The powers of High Courts under which Articles are part of Basic Structure?',
            options: [
              'Articles 124 and 125',
              'Articles 226 and 227',
              'Articles 214 and 215',
              'Articles 233 and 234'
            ],
            correct: 1,
            explanation: 'Powers of High Courts under Articles 226 (writs) and 227 (superintendence) are part of the basic structure.'
          },
          {
            id: 'ebs-q8',
            question: 'The "sovereign, democratic and republican nature" of the Indian polity is:',
            options: [
              'Not a basic feature',
              'A basic feature that can be amended',
              'A basic feature that cannot be destroyed',
              'Only a Preamble feature with no legal value'
            ],
            correct: 2,
            explanation: 'The sovereign, democratic and republican nature of the Indian polity is a basic feature that cannot be destroyed by constitutional amendments.'
          },
        ]
      }
    ]
  },
  {
    id: 'states-and-union-territories',
    name: 'States and Union Territories (Part-I: Article 1-4)',
    icon: '🗺️',
    subtopics: [
      {
        id: 'commissions-reorganisation',
        name: 'Various Commissions in Reorganisation of States and UTs',
        flashcards: [
          {
            id: 'cr-1',
            front: 'What was the Dhar Commission (Dec 1948)?',
            back: 'Recommended state reorganisation based on administrative convenience, NOT language.'
          },
          {
            id: 'cr-2',
            front: 'What was the JVP Committee (Dec 1948 – Apr 1949)?',
            back: 'Formally rejected language as the basis for state reorganisation.\nMembers: Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya (JVP = initials of the three members).'
          },
          {
            id: 'cr-3',
            front: 'What was the first linguistic state of India and when was it created?',
            back: 'Andhra State — created in October 1953 by separating Telugu-speaking areas from the Madras state. The Government of India was forced to create it due to public demand.'
          },
          {
            id: 'cr-4',
            front: 'What was the Fazl Ali Commission (Dec 1953 – Sept 1955)?',
            back: 'Accepted language as a basis for reorganisation but rejected the "one language-one state" theory.\nIts recommendations led to the States Reorganisation Act (1956), creating 14 states and 6 UTs on Nov 1, 1956.'
          },
          {
            id: 'cr-5',
            front: 'Who were the members of the Fazl Ali Commission?',
            back: 'Fazl Ali (Chairman), K.M. Panikkar, and H.N. Kunzru.'
          },
          {
            id: 'cr-6',
            front: 'What did the States Reorganisation Act (1956) do?',
            back: 'Created 14 states and 6 Union Territories on November 1, 1956, based on the recommendations of the Fazl Ali Commission.'
          },
          {
            id: 'cr-7',
            front: 'What does JVP stand for in the JVP Committee?',
            back: 'J = Jawaharlal Nehru\nV = Vallabhbhai Patel\nP = Pattabhi Sitaramayya'
          },
          {
            id: 'cr-8',
            front: 'What was the Dhar Commission\'s stance vs Fazl Ali Commission\'s stance on language?',
            back: 'Dhar Commission: Rejected language, recommended administrative convenience.\nFazl Ali Commission: Accepted language as a basis but rejected "one language-one state" theory.'
          },
          {
            id: 'cr-9',
            front: 'What was the chronological order of commissions/events in state reorganisation?',
            back: '1. Dhar Commission (Dec 1948) — rejected language\n2. JVP Committee (Dec 1948–Apr 1949) — rejected language\n3. Andhra State created (Oct 1953) — first linguistic state\n4. Fazl Ali Commission (Dec 1953–Sept 1955) — accepted language\n5. States Reorganisation Act (1956) — 14 states, 6 UTs'
          },
        ],
        quiz: [
          {
            id: 'cr-q1',
            question: 'The Dhar Commission recommended state reorganisation based on:',
            options: ['Language', 'Administrative convenience', 'Religion', 'Geography'],
            correct: 1,
            explanation: 'The Dhar Commission (Dec 1948) recommended reorganisation based on administrative convenience, not language.'
          },
          {
            id: 'cr-q2',
            question: 'Who were the members of the JVP Committee?',
            options: [
              'Fazl Ali, K.M. Panikkar, H.N. Kunzru',
              'Jawaharlal Nehru, Vallabhbhai Patel, Pattabhi Sitaramayya',
              'Rajendra Prasad, B.R. Ambedkar, Nehru',
              'Sardar Patel, J.B. Kripalani, Nehru'
            ],
            correct: 1,
            explanation: 'JVP = Jawaharlal Nehru, Vallabhbhai Patel, and Pattabhi Sitaramayya. They formally rejected language as basis for reorganisation.'
          },
          {
            id: 'cr-q3',
            question: 'The first linguistic state of India was:',
            options: ['Kerala', 'Andhra State', 'Karnataka', 'Tamil Nadu'],
            correct: 1,
            explanation: 'Andhra State was the first linguistic state, created in October 1953 by separating Telugu-speaking areas from Madras state.'
          },
          {
            id: 'cr-q4',
            question: 'The Fazl Ali Commission\'s stance on language was:',
            options: [
              'Completely rejected language as basis',
              'Accepted language as basis but rejected "one language-one state" theory',
              'Accepted "one language-one state" theory',
              'Recommended Hindi as the sole basis'
            ],
            correct: 1,
            explanation: 'The Fazl Ali Commission accepted language as a basis for reorganisation but rejected the "one language-one state" theory.'
          },
          {
            id: 'cr-q5',
            question: 'The States Reorganisation Act (1956) created:',
            options: ['12 States and 8 UTs', '14 States and 6 UTs', '16 States and 4 UTs', '28 States and 8 UTs'],
            correct: 1,
            explanation: 'The States Reorganisation Act (1956) created 14 states and 6 Union Territories on November 1, 1956.'
          },
          {
            id: 'cr-q6',
            question: 'Who was the Chairman of the Fazl Ali Commission?',
            options: ['K.M. Panikkar', 'H.N. Kunzru', 'Fazl Ali', 'Jawaharlal Nehru'],
            correct: 2,
            explanation: 'Fazl Ali was the Chairman. Other members were K.M. Panikkar and H.N. Kunzru.'
          },
          {
            id: 'cr-q7',
            question: 'Which commission/committee formally rejected language as basis for state reorganisation?',
            options: [
              'Only Dhar Commission',
              'Only JVP Committee',
              'Both Dhar Commission and JVP Committee',
              'Fazl Ali Commission'
            ],
            correct: 2,
            explanation: 'Both the Dhar Commission (Dec 1948) and the JVP Committee (Dec 1948–Apr 1949) rejected language as the basis. The Fazl Ali Commission later accepted it.'
          },
          {
            id: 'cr-q8',
            question: 'Andhra State was created by separating Telugu-speaking areas from:',
            options: ['Bombay state', 'Hyderabad state', 'Madras state', 'Mysore state'],
            correct: 2,
            explanation: 'Andhra State was created in October 1953 by separating Telugu-speaking areas from the Madras state.'
          },
        ]
      },
      {
        id: 'states-and-uts-post-1956',
        name: 'States and UTs (Post-1956)',
        flashcards: [
          {
            id: 'sut-1',
            front: 'What happened in 1960 regarding states?',
            back: 'Bifurcation of Maharashtra and Gujarat (from the former Bombay state).'
          },
          {
            id: 'sut-2',
            front: 'Which UT was created in 1961?',
            back: 'Dadra and Nagar Haveli.'
          },
          {
            id: 'sut-3',
            front: 'Which UTs were created in 1962 and by which amendments?',
            back: 'Goa, Daman, Diu (12th Amendment) and Puducherry (14th Amendment).'
          },
          {
            id: 'sut-4',
            front: 'When was Nagaland created and how?',
            back: '1963 — Nagaland came into existence on the basis of a Constitutional Amendment Act. (UPSC 2025)'
          },
          {
            id: 'sut-5',
            front: 'When was Haryana created and on whose recommendation?',
            back: '1966 — on the recommendation of the Shah Commission.'
          },
          {
            id: 'sut-6',
            front: 'When did Himachal Pradesh become a state?',
            back: '1971.'
          },
          {
            id: 'sut-7',
            front: 'Which states were created in 1987?',
            back: 'Mizoram, Arunachal Pradesh, and Goa.\nNote: Arunachal Pradesh\'s capital is named after a fort, and the state has two National Parks. (UPSC 2025)'
          },
          {
            id: 'sut-8',
            front: 'Which three states were created in 2000?',
            back: 'Chhattisgarh, Uttarakhand, and Jharkhand.'
          },
          {
            id: 'sut-9',
            front: 'When was Telangana created?',
            back: '2014 — carved out of Andhra Pradesh. It became the 29th state of India.'
          },
          {
            id: 'sut-10',
            front: 'Which two UTs were created in 2019?',
            back: 'J&K and Ladakh (created by bifurcating the former state of Jammu & Kashmir).'
          },
          {
            id: 'sut-11',
            front: 'How many states and UTs does India currently have?',
            back: '28 States and 8 Union Territories.'
          },
          {
            id: 'sut-12',
            front: 'List the timeline of state/UT creation post-1956.',
            back: '1960: Maharashtra, Gujarat\n1961: Dadra & Nagar Haveli (UT)\n1962: Goa/Daman/Diu (UT), Puducherry (UT)\n1963: Nagaland\n1966: Haryana\n1971: Himachal Pradesh\n1987: Mizoram, Arunachal Pradesh, Goa\n2000: Chhattisgarh, Uttarakhand, Jharkhand\n2014: Telangana\n2019: J&K (UT), Ladakh (UT)'
          },
        ],
        quiz: [
          {
            id: 'sut-q1',
            question: 'Maharashtra and Gujarat were created by bifurcation in:',
            options: ['1956', '1960', '1962', '1966'],
            correct: 1,
            explanation: 'Maharashtra and Gujarat were created in 1960 by bifurcation of the former Bombay state.'
          },
          {
            id: 'sut-q2',
            question: 'Nagaland came into existence in:',
            options: ['1960', '1962', '1963', '1966'],
            correct: 2,
            explanation: 'Nagaland was created in 1963 on the basis of a Constitutional Amendment Act.'
          },
          {
            id: 'sut-q3',
            question: 'Haryana was created on the recommendation of:',
            options: ['Dhar Commission', 'Fazl Ali Commission', 'Shah Commission', 'JVP Committee'],
            correct: 2,
            explanation: 'Haryana was created in 1966 on the recommendation of the Shah Commission.'
          },
          {
            id: 'sut-q4',
            question: 'Which of the following states was NOT created in 1987?',
            options: ['Mizoram', 'Arunachal Pradesh', 'Goa', 'Nagaland'],
            correct: 3,
            explanation: 'Nagaland was created in 1963. Mizoram, Arunachal Pradesh, and Goa were created in 1987.'
          },
          {
            id: 'sut-q5',
            question: 'Chhattisgarh, Uttarakhand, and Jharkhand were created in:',
            options: ['1987', '2000', '2014', '2019'],
            correct: 1,
            explanation: 'All three states — Chhattisgarh, Uttarakhand, and Jharkhand — were created in 2000.'
          },
          {
            id: 'sut-q6',
            question: 'Telangana became a state in:',
            options: ['2000', '2009', '2014', '2019'],
            correct: 2,
            explanation: 'Telangana was created in 2014, carved out of Andhra Pradesh, becoming the 29th state.'
          },
          {
            id: 'sut-q7',
            question: 'The UTs of J&K and Ladakh were created in:',
            options: ['2014', '2017', '2019', '2020'],
            correct: 2,
            explanation: 'J&K and Ladakh were created as UTs in 2019 by bifurcating the former state of Jammu & Kashmir.'
          },
          {
            id: 'sut-q8',
            question: 'Puducherry became a UT through which Constitutional Amendment?',
            options: ['10th Amendment', '12th Amendment', '14th Amendment', '16th Amendment'],
            correct: 2,
            explanation: 'Puducherry became a UT through the 14th Amendment in 1962. Goa, Daman, Diu were through the 12th Amendment.'
          },
          {
            id: 'sut-q9',
            question: 'India currently has:',
            options: ['28 States and 8 UTs', '29 States and 7 UTs', '28 States and 9 UTs', '30 States and 6 UTs'],
            correct: 0,
            explanation: 'India currently has 28 States and 8 Union Territories.'
          },
          {
            id: 'sut-q10',
            question: 'Himachal Pradesh became a full state in:',
            options: ['1966', '1971', '1975', '1987'],
            correct: 1,
            explanation: 'Himachal Pradesh became a full state in 1971.'
          },
        ]
      },
      {
        id: 'recent-reorganisation-acts',
        name: 'Recent Reorganisation Acts (2019)',
        flashcards: [
          {
            id: 'rra-1',
            front: 'What did the Jammu and Kashmir Reorganisation Act, 2019 do?',
            back: 'Article 370 was abrogated, ending Jammu and Kashmir\'s special status. The J&K Reorganisation Act created two Union Territories:\n- UT of Jammu & Kashmir (with Legislature)\n- UT of Ladakh (without Legislature)'
          },
          {
            id: 'rra-2',
            front: 'How were the districts of the former J&K state divided between the two new UTs?',
            back: 'All districts except Kargil and Leh → UT of Jammu & Kashmir\nKargil and Leh districts → UT of Ladakh'
          },
          {
            id: 'rra-3',
            front: 'Under which Article was the J&K Reorganisation Act enacted?',
            back: 'Under Article 3 (which deals with formation of new states and alteration of areas, boundaries, or names).'
          },
          {
            id: 'rra-4',
            front: 'Does the UT of Jammu & Kashmir have a legislature?',
            back: 'Yes, UT of Jammu & Kashmir has a legislature. UT of Ladakh does NOT have a legislature.'
          },
          {
            id: 'rra-5',
            front: 'What did the Dadra and Nagar Haveli and Daman and Diu (Merger of UTs) Act, 2019 do?',
            back: 'Merged two UTs — Dadra and Nagar Haveli, and Daman and Diu — into one UT.'
          },
          {
            id: 'rra-6',
            front: 'Which Article was abrogated by the J&K Reorganisation Act, 2019?',
            back: 'Article 370, which gave special status to Jammu and Kashmir.'
          },
        ],
        quiz: [
          {
            id: 'rra-q1',
            question: 'The J&K Reorganisation Act, 2019 created:',
            options: [
              'One state and one UT',
              'Two states',
              'Two Union Territories',
              'One UT with legislature and one state'
            ],
            correct: 2,
            explanation: 'The Act created two UTs: Jammu & Kashmir (with Legislature) and Ladakh (without Legislature).'
          },
          {
            id: 'rra-q2',
            question: 'Which UT created in 2019 does NOT have a legislature?',
            options: ['Jammu & Kashmir', 'Ladakh', 'Both have legislatures', 'Neither has a legislature'],
            correct: 1,
            explanation: 'Ladakh does not have a legislature. J&K has a legislature.'
          },
          {
            id: 'rra-q3',
            question: 'Kargil and Leh districts became part of:',
            options: ['UT of Jammu & Kashmir', 'UT of Ladakh', 'Remained with J&K state', 'A separate state'],
            correct: 1,
            explanation: 'Kargil and Leh districts became part of the UT of Ladakh. All other districts went to UT of Jammu & Kashmir.'
          },
          {
            id: 'rra-q4',
            question: 'The J&K Reorganisation Act was enacted under which Article?',
            options: ['Article 1', 'Article 3', 'Article 370', 'Article 368'],
            correct: 1,
            explanation: 'The Act was enacted under Article 3, which deals with formation of new states and alteration of areas, boundaries, or names.'
          },
          {
            id: 'rra-q5',
            question: 'The Dadra and Nagar Haveli and Daman and Diu (Merger of UTs) Act, 2019:',
            options: [
              'Created two new UTs',
              'Merged two UTs into one',
              'Converted UTs into a state',
              'Abolished both UTs'
            ],
            correct: 1,
            explanation: 'The Act merged the two UTs of Dadra and Nagar Haveli, and Daman and Diu into a single UT.'
          },
          {
            id: 'rra-q6',
            question: 'Which Article was abrogated in 2019, ending J&K\'s special status?',
            options: ['Article 35A', 'Article 356', 'Article 370', 'Article 368'],
            correct: 2,
            explanation: 'Article 370 was abrogated in 2019, ending Jammu and Kashmir\'s special status.'
          },
        ]
      },
      {
        id: 'administration-of-union-territories',
        name: 'Administration of Union Territories (Article 239-241)',
        flashcards: [
          {
            id: 'aut-1',
            front: 'Which Articles and Part of the Constitution govern Union Territories?',
            back: 'Articles 239–241 in Part VIII of the Constitution.'
          },
          {
            id: 'aut-2',
            front: 'How are Union Territories administered?',
            back: 'By the President through an Administrator, who is an agent (not head of state).'
          },
          {
            id: 'aut-3',
            front: 'Which UTs have a Lieutenant Governor (LG)?',
            back: 'Delhi, Puducherry, Andaman and Nicobar, Jammu and Kashmir, and Ladakh.'
          },
          {
            id: 'aut-4',
            front: 'Which UTs have Administrators (not LGs)?',
            back: 'Chandigarh, Dadra and Nagar Haveli and Daman and Diu, and Lakshadweep.'
          },
          {
            id: 'aut-5',
            front: 'Which Union Territories have a Legislative Assembly and Council of Ministers headed by a Chief Minister?',
            back: 'Puducherry, Delhi, and Jammu and Kashmir.'
          },
          {
            id: 'aut-6',
            front: 'What are the Advisory Committees for UTs without a legislature?',
            back: 'Home Minister\'s Advisory Committee (HMAC): For UTs without legislature, chaired by the Union Home Minister.\nAdministrative Advisory Committee (AAC): Chaired by the Administrator of the UT.'
          },
          {
            id: 'aut-7',
            front: 'For which UTs can the President make regulations with the same effect as parliamentary acts?',
            back: 'Andaman and Nicobar Islands, Lakshadweep, Dadra and Nagar Haveli, and Daman and Diu.'
          },
          {
            id: 'aut-8',
            front: 'Which is the only UT with an independent High Court?',
            back: 'Delhi — since 1966, it has been the sole Union Territory with an independent High Court.'
          },
          {
            id: 'aut-9',
            front: 'List the High Court jurisdictions for all UTs.',
            back: '- Delhi: Independent High Court (since 1966)\n- Dadra & Nagar Haveli, Daman & Diu: Bombay HC\n- Andaman & Nicobar: Calcutta HC\n- Chandigarh: Punjab and Haryana HC\n- Lakshadweep: Kerala HC\n- Puducherry: Madras HC\n- J&K and Ladakh: Share J&K and Ladakh HC'
          },
          {
            id: 'aut-10',
            front: 'Under which High Court does Andaman and Nicobar Islands fall?',
            back: 'Calcutta High Court.'
          },
          {
            id: 'aut-11',
            front: 'Under which High Court does Lakshadweep fall?',
            back: 'Kerala High Court.'
          },
          {
            id: 'aut-12',
            front: 'Under which High Court does Puducherry fall?',
            back: 'Madras High Court.'
          },
          {
            id: 'aut-13',
            front: 'What is the difference between a Lieutenant Governor and an Administrator?',
            back: 'Both are appointed by the President, but LG is a higher designation given to UTs with greater significance (Delhi, Puducherry, A&N, J&K, Ladakh). Administrators govern smaller UTs (Chandigarh, DNH&DD, Lakshadweep).'
          },
        ],
        quiz: [
          {
            id: 'aut-q1',
            question: 'Union Territories are governed by Articles:',
            options: ['Articles 152–237', 'Articles 239–241', 'Articles 243–243O', 'Articles 244–244A'],
            correct: 1,
            explanation: 'Union Territories are governed by Articles 239–241 in Part VIII of the Constitution.'
          },
          {
            id: 'aut-q2',
            question: 'Which of the following UTs does NOT have a Lieutenant Governor?',
            options: ['Delhi', 'Puducherry', 'Chandigarh', 'Jammu and Kashmir'],
            correct: 2,
            explanation: 'Chandigarh has an Administrator, not a Lieutenant Governor. LGs are for Delhi, Puducherry, A&N, J&K, and Ladakh.'
          },
          {
            id: 'aut-q3',
            question: 'Which UTs have a Legislative Assembly and Chief Minister?',
            options: [
              'Delhi, Chandigarh, Puducherry',
              'Puducherry, Delhi, Jammu and Kashmir',
              'All Union Territories',
              'Delhi, Ladakh, Puducherry'
            ],
            correct: 1,
            explanation: 'Only Puducherry, Delhi, and Jammu and Kashmir have a Legislative Assembly and Council of Ministers headed by a Chief Minister.'
          },
          {
            id: 'aut-q4',
            question: 'The Home Minister\'s Advisory Committee (HMAC) is for:',
            options: [
              'All Union Territories',
              'UTs with legislature',
              'UTs without legislature',
              'Only Delhi and Puducherry'
            ],
            correct: 2,
            explanation: 'HMAC is for UTs without legislature, chaired by the Union Home Minister.'
          },
          {
            id: 'aut-q5',
            question: 'Which is the only UT with an independent High Court?',
            options: ['Puducherry', 'Chandigarh', 'Delhi', 'Jammu and Kashmir'],
            correct: 2,
            explanation: 'Delhi has been the sole UT with an independent High Court since 1966.'
          },
          {
            id: 'aut-q6',
            question: 'Andaman and Nicobar Islands falls under which High Court?',
            options: ['Bombay HC', 'Madras HC', 'Calcutta HC', 'Kerala HC'],
            correct: 2,
            explanation: 'Andaman and Nicobar Islands falls under the Calcutta High Court.'
          },
          {
            id: 'aut-q7',
            question: 'The President can make regulations for which of the following UTs?',
            options: [
              'Delhi and Puducherry',
              'A&N Islands, Lakshadweep, DNH&DD',
              'All Union Territories',
              'Only Ladakh'
            ],
            correct: 1,
            explanation: 'The President can make regulations for Andaman & Nicobar, Lakshadweep, Dadra & Nagar Haveli, and Daman & Diu — with the same effect as parliamentary acts.'
          },
          {
            id: 'aut-q8',
            question: 'Puducherry falls under which High Court?',
            options: ['Bombay HC', 'Calcutta HC', 'Kerala HC', 'Madras HC'],
            correct: 3,
            explanation: 'Puducherry falls under the Madras High Court.'
          },
          {
            id: 'aut-q9',
            question: 'Chandigarh falls under which High Court?',
            options: ['Delhi HC', 'Punjab and Haryana HC', 'Bombay HC', 'Calcutta HC'],
            correct: 1,
            explanation: 'Chandigarh falls under the Punjab and Haryana High Court.'
          },
          {
            id: 'aut-q10',
            question: 'UTs are administered by the President through:',
            options: ['A Governor', 'An Administrator (agent)', 'The Chief Minister', 'The Home Minister'],
            correct: 1,
            explanation: 'UTs are administered by the President via an Administrator, who is an agent, not a head of state.'
          },
        ]
      }
    ]
  },
  {
    id: 'fundamental-rights',
    name: 'Fundamental Rights (Part-III: Articles 12-35)',
    icon: '⚖️',
    subtopics: [
      {
        id: 'laws-inconsistent-with-fr',
        name: 'Laws Inconsistent with Fundamental Rights (Article 13)',
        flashcards: [
          {
            id: 'lifr-1',
            front: 'What does Article 13 state?',
            back: 'All laws that are inconsistent with or in derogation of any of the Fundamental Rights shall be void. It expressly provides for the doctrine of judicial review.'
          },
          {
            id: 'lifr-2',
            front: 'What does the term "law" mean in Article 13?',
            back: 'It includes:\n- Permanent laws enacted by the Centre and State\n- Temporary ordinance by the President\n- Statutory instruments of delegated legislation (executive legislation)\n- Orders, custom or usage having the force of law'
          },
          {
            id: 'lifr-3',
            front: 'What does Article 13(4) state?',
            back: 'Nothing in this article shall apply to any amendment of the Constitution made under Article 368. (Added by the 24th Constitutional Amendment, 1971)'
          },
          {
            id: 'lifr-4',
            front: 'What did the Kesavananda Bharati case (1973) hold regarding Article 13(4)?',
            back: 'The SC held that a Constitutional amendment can be challenged on the ground if it violates a fundamental right that forms a part of the "basic structure" of the Constitution, and hence can be declared as void.'
          },
          {
            id: 'lifr-5',
            front: 'Which Article expressly provides for the doctrine of judicial review?',
            back: 'Article 13 — by declaring that laws inconsistent with Fundamental Rights shall be void.'
          },
          {
            id: 'lifr-6',
            front: 'Can a Constitutional Amendment be challenged under Article 13?',
            back: 'Article 13(4) says it shall not apply to amendments under Article 368. However, the Kesavananda Bharati case (1973) held that amendments violating the "basic structure" can still be challenged and declared void.'
          },
          {
            id: 'lifr-7',
            front: 'Which amendment added Article 13(4)?',
            back: 'The 24th Constitutional Amendment, 1971.'
          },
          {
            id: 'lifr-8',
            front: 'Does Article 13 cover ordinances and executive orders?',
            back: 'Yes. The term "law" in Article 13 includes temporary ordinances by the President, statutory instruments of delegated legislation, orders, custom or usage having the force of law.'
          },
        ],
        quiz: [
          {
            id: 'lifr-q1',
            question: 'Article 13 provides for:',
            options: [
              'Right to Equality',
              'Doctrine of Judicial Review',
              'Right to Freedom of Religion',
              'Right against Exploitation'
            ],
            correct: 1,
            explanation: 'Article 13 expressly provides for the doctrine of judicial review by declaring that laws inconsistent with Fundamental Rights shall be void.'
          },
          {
            id: 'lifr-q2',
            question: 'According to Article 13, laws inconsistent with Fundamental Rights are:',
            options: ['Voidable', 'Void', 'Suspended', 'Valid until challenged'],
            correct: 1,
            explanation: 'Article 13 states that all laws inconsistent with or in derogation of Fundamental Rights shall be void.'
          },
          {
            id: 'lifr-q3',
            question: 'Article 13(4) was added by which amendment?',
            options: ['1st Amendment, 1951', '24th Amendment, 1971', '42nd Amendment, 1976', '44th Amendment, 1978'],
            correct: 1,
            explanation: 'Article 13(4) was added by the 24th Constitutional Amendment, 1971, stating that Article 13 shall not apply to amendments under Article 368.'
          },
          {
            id: 'lifr-q4',
            question: 'The Kesavananda Bharati case (1973) held that:',
            options: [
              'Parliament has unlimited amending power',
              'Article 13 cannot be invoked against any law',
              'Constitutional amendments violating basic structure can be declared void',
              'Fundamental Rights are absolute and cannot be restricted'
            ],
            correct: 2,
            explanation: 'The SC held that amendments violating a fundamental right that forms part of the "basic structure" can be challenged and declared void.'
          },
          {
            id: 'lifr-q5',
            question: 'The term "law" in Article 13 includes:',
            options: [
              'Only Acts of Parliament',
              'Only permanent legislation',
              'Permanent laws, ordinances, delegated legislation, orders, customs',
              'Only customs and usage'
            ],
            correct: 2,
            explanation: '"Law" in Article 13 includes permanent laws, temporary ordinances, statutory instruments, delegated legislation, orders, customs or usage having the force of law.'
          },
          {
            id: 'lifr-q6',
            question: 'Article 13(4) states that Article 13 shall not apply to:',
            options: [
              'Ordinances by the President',
              'State laws',
              'Amendments under Article 368',
              'Executive orders'
            ],
            correct: 2,
            explanation: 'Article 13(4) states that nothing in Article 13 shall apply to any amendment of the Constitution made under Article 368.'
          },
          {
            id: 'lifr-q7',
            question: 'Which landmark case established the Basic Structure Doctrine?',
            options: [
              'Golaknath case (1967)',
              'Kesavananda Bharati case (1973)',
              'Minerva Mills case (1980)',
              'Shankari Prasad case (1951)'
            ],
            correct: 1,
            explanation: 'The Kesavananda Bharati case (1973) established the Basic Structure Doctrine, holding that Parliament cannot amend the basic structure of the Constitution.'
          },
          {
            id: 'lifr-q8',
            question: 'Can a Presidential ordinance be struck down under Article 13?',
            options: [
              'No, ordinances are exempt',
              'Yes, if it violates Fundamental Rights',
              'Only if Parliament approves',
              'Only during an emergency'
            ],
            correct: 1,
            explanation: 'Yes. The term "law" in Article 13 includes temporary ordinances by the President, so they can be struck down if inconsistent with Fundamental Rights.'
          },
        ]
      },
      {
        id: 'right-to-freedom-of-religion',
        name: 'Right to Freedom of Religion (Articles 25-28)',
        flashcards: [
          {
            id: 'rfr-1',
            front: 'What does Article 25 guarantee?',
            back: 'All persons are equally entitled to freedom of conscience and the right to freely profess, practice and propagate religion.\nAvailable to all persons — citizens as well as non-citizens.'
          },
          {
            id: 'rfr-2',
            front: 'What are the four freedoms under Article 25?',
            back: '1. Freedom of conscience: Inner freedom to mould relation with God\n2. Right to profess: Declare religious beliefs openly and freely\n3. Right to practice: Perform worship, rituals, ceremonies\n4. Right to propagate: Transmit and disseminate one\'s religious beliefs to others'
          },
          {
            id: 'rfr-3',
            front: 'Does the Right to Propagate include the right to convert?',
            back: 'No. Right to propagate does NOT include a right to convert another person. Forcible conversions impinge on the "freedom of conscience" guaranteed to all persons.'
          },
          {
            id: 'rfr-4',
            front: 'What does Article 25 cover?',
            back: 'Religious beliefs (doctrines) and religious practices (rituals).'
          },
          {
            id: 'rfr-5',
            front: 'What are the two explanations in Article 25?',
            back: '1. Wearing and carrying of kirpans is included in the profession of the Sikh religion\n2. Hindus include Sikhs, Jains and Buddhists'
          },
          {
            id: 'rfr-6',
            front: 'What are the exceptions/restrictions to Article 25?',
            back: 'Public order, morality, health, and other provisions relating to fundamental rights.'
          },
          {
            id: 'rfr-7',
            front: 'What was held in Lt. Kamaleshan\'s case regarding Article 25?',
            back: 'SC upheld dismissal of a Christian Army officer who refused to attend aarti at a regimental temple. Religious freedom is not absolute for armed forces. Under Article 33, Parliament may restrict FRs for discipline, unit cohesion, and operational effectiveness. Institutional duty outweighs personal belief.'
          },
          {
            id: 'rfr-8',
            front: 'What does Article 26 guarantee?',
            back: 'Freedom to manage religious affairs for every religious denomination or its sections:\n1. Right to establish and maintain religious/charitable institutions\n2. Right to manage its own affairs in matters of religion\n3. Right to own and acquire movable and immovable property\n4. Right to administer such property in accordance with law'
          },
          {
            id: 'rfr-9',
            front: 'What is the difference between Article 25 and Article 26?',
            back: 'Article 25: Guarantees rights of individuals (personal freedom of religion)\nArticle 26: Guarantees rights of religious denominations or their sections (collective freedom of religion)'
          },
          {
            id: 'rfr-10',
            front: 'What are the restrictions on Article 26?',
            back: 'Subject to public order, morality and health. But NOT subject to other provisions relating to fundamental rights (unlike Article 25 which is subject to other FR provisions too).'
          },
          {
            id: 'rfr-11',
            front: 'What three conditions must a religious denomination satisfy (as per SC)?',
            back: '1. It should be a collection of beliefs (doctrines) conducive to spiritual well-being\n2. It should have a common organisation\n3. It should be designated by a distinctive name'
          },
          {
            id: 'rfr-12',
            front: 'Which organisations did SC hold as religious denominations and which not?',
            back: 'Religious denominations within Hinduism: Ramakrishna Mission and Ananda Marga.\nNOT a religious denomination: Aurobindo Society.'
          },
          {
            id: 'rfr-13',
            front: 'What does Article 27 state?',
            back: 'Freedom from Taxation for Promotion of a Religion: No person shall be compelled to pay any taxes for the promotion or maintenance of any particular religion.\n- Taxes can be used for ALL religions, not any particular one\n- Prohibits only levy of tax, NOT a fee\n- Fee can be levied on religious endowments for regulation expenditure'
          },
          {
            id: 'rfr-14',
            front: 'What is the difference between "tax" and "fee" under Article 27?',
            back: 'Article 27 prohibits only the levy of a tax for promotion of a particular religion, not a fee. A fee can be levied on religious endowments for meeting regulation expenditure.'
          },
          {
            id: 'rfr-15',
            front: 'What does Article 28 deal with?',
            back: 'Freedom from Attending Religious Instruction: No religious instruction in institutions wholly maintained by state funds.'
          },
          {
            id: 'rfr-16',
            front: 'What are the four types of educational institutions under Article 28?',
            back: '1. Wholly maintained by state → Religious instruction completely prohibited\n2. Administered by state but established under endowment/trust → Religious instruction permitted\n3. Recognised by state → Permitted on voluntary basis\n4. Receiving aid from state → Permitted on voluntary basis'
          },
          {
            id: 'rfr-17',
            front: 'What is the Essential Religious Practices doctrine?',
            back: 'Under Articles 25-28, Indian courts apply this doctrine (from the Shirur Mutt Case) to decide what is core to a faith and what is not. No other major democracy empowers judges to filter religious belief through constitutional scrutiny.'
          },
          {
            id: 'rfr-18',
            front: 'Which case established the Essential Religious Practices doctrine?',
            back: 'The Shirur Mutt Case.'
          },
        ],
        quiz: [
          {
            id: 'rfr-q1',
            question: 'Article 25 is available to:',
            options: ['Only citizens', 'Only non-citizens', 'All persons (citizens and non-citizens)', 'Only religious denominations'],
            correct: 2,
            explanation: 'Article 25 is available to all persons — both citizens and non-citizens.'
          },
          {
            id: 'rfr-q2',
            question: 'Right to propagate under Article 25 includes:',
            options: [
              'Right to convert others to your religion',
              'Right to forcibly convert others',
              'Right to transmit and disseminate religious beliefs, but NOT convert',
              'Right to propagate only within your community'
            ],
            correct: 2,
            explanation: 'Right to propagate means transmission and dissemination of beliefs. It does NOT include a right to convert. Forcible conversions violate freedom of conscience.'
          },
          {
            id: 'rfr-q3',
            question: 'According to Article 25, Hindus include:',
            options: [
              'Only those who follow Hinduism',
              'Sikhs, Jains and Buddhists',
              'Sikhs and Jains only',
              'All Indian religions'
            ],
            correct: 1,
            explanation: 'Article 25 contains an explanation that Hindus include Sikhs, Jains and Buddhists.'
          },
          {
            id: 'rfr-q4',
            question: 'Article 25 guarantees individual rights while Article 26 guarantees:',
            options: [
              'Individual rights as well',
              'Rights of religious denominations (collective)',
              'Rights of the state',
              'Rights of educational institutions'
            ],
            correct: 1,
            explanation: 'Article 25 = individual freedom of religion. Article 26 = collective freedom — rights of religious denominations or their sections.'
          },
          {
            id: 'rfr-q5',
            question: 'SC held that Aurobindo Society is:',
            options: [
              'A religious denomination within Hinduism',
              'A religious denomination outside Hinduism',
              'NOT a religious denomination',
              'A charitable trust'
            ],
            correct: 2,
            explanation: 'SC held that Aurobindo Society is NOT a religious denomination. Ramakrishna Mission and Ananda Marga are religious denominations within Hinduism.'
          },
          {
            id: 'rfr-q6',
            question: 'Article 27 prohibits:',
            options: [
              'All taxes related to religion',
              'Tax for promotion of any particular religion, but not a fee',
              'Both tax and fee for religion',
              'Only fees for religious purposes'
            ],
            correct: 1,
            explanation: 'Article 27 prohibits only the levy of a tax for promotion of a particular religion. Fees can be levied on religious endowments for regulation expenditure.'
          },
          {
            id: 'rfr-q7',
            question: 'In an institution wholly maintained by state funds, Article 28 provides:',
            options: [
              'Religious instruction is permitted on voluntary basis',
              'Religious instruction is completely prohibited',
              'Religious instruction is mandatory',
              'Only moral instruction is allowed'
            ],
            correct: 1,
            explanation: 'In institutions wholly maintained by state funds, religious instruction is completely prohibited under Article 28.'
          },
          {
            id: 'rfr-q8',
            question: 'The Essential Religious Practices doctrine was established in:',
            options: ['Kesavananda Bharati case', 'Shirur Mutt Case', 'Golaknath case', 'Minerva Mills case'],
            correct: 1,
            explanation: 'The Essential Religious Practices doctrine was established in the Shirur Mutt Case, where courts decide what is core to a faith.'
          },
          {
            id: 'rfr-q9',
            question: 'In Lt. Kamaleshan\'s case, the SC held that:',
            options: [
              'Armed forces cannot restrict religious freedom',
              'Article 25 is absolute',
              'Religious freedom is not absolute for armed forces; institutional duty outweighs personal belief',
              'Only civilian courts can decide on armed forces matters'
            ],
            correct: 2,
            explanation: 'SC held that under Article 33, Parliament may restrict FRs for armed forces to maintain discipline. Institutional duty outweighs personal belief.'
          },
          {
            id: 'rfr-q10',
            question: 'Wearing and carrying of kirpans is included in the profession of which religion under Article 25?',
            options: ['Hinduism', 'Islam', 'Sikhism', 'Buddhism'],
            correct: 2,
            explanation: 'Article 25 contains an explanation that wearing and carrying of kirpans is included in the profession of the Sikh religion.'
          },
          {
            id: 'rfr-q11',
            question: 'Article 26 is subject to which restrictions?',
            options: [
              'Public order, morality, health, and other FR provisions',
              'Public order, morality, and health only (NOT other FR provisions)',
              'No restrictions at all',
              'Only public order'
            ],
            correct: 1,
            explanation: 'Article 26 is subject to public order, morality and health, but NOT subject to other provisions relating to fundamental rights (unlike Article 25).'
          },
        ]
      },
      {
        id: 'cultural-educational-rights',
        name: 'Cultural and Educational Rights (Articles 29-30)',
        flashcards: [
          {
            id: 'cer-1',
            front: 'What does Article 29 protect?',
            back: 'Protection of Interests of Minorities:\n1. Group right: Any section of citizens having a distinct language, script or culture shall have the right to conserve the same.\n2. Individual right: No citizen shall be denied admission into any state-maintained or state-aided educational institution on grounds only of religion, race, caste, or language.'
          },
          {
            id: 'cer-2',
            front: 'Does Article 29 protect only minorities?',
            back: 'No. Article 29 grants protection to both religious minorities and linguistic minorities. The SC held that the term "section of the citizens" includes minorities as well as the majority.'
          },
          {
            id: 'cer-3',
            front: 'What did the SC hold about the "right to conserve language" under Article 29?',
            back: 'The right to conserve the language includes the right to agitate for the protection of the language.'
          },
          {
            id: 'cer-4',
            front: 'What does Article 30 guarantee?',
            back: 'Right of minorities to establish and administer educational institutions:\n- All minorities (religious or linguistic) can establish and administer educational institutions of their choice.\n- State compensation for compulsory acquisition shall not restrict this right.\n- State shall not discriminate against minority institutions in granting aid.'
          },
          {
            id: 'cer-5',
            front: 'What is the key difference between Article 29 and Article 30?',
            back: 'Article 29: Protection extends to "any section of citizens" (includes minorities AND majority).\nArticle 30: Protection is confined ONLY to minorities (religious or linguistic), does not extend to any section of citizens.'
          },
          {
            id: 'cer-6',
            front: 'Is the term "minority" defined in the Constitution?',
            back: 'No. The term "minority" has not been defined anywhere in the Constitution.'
          },
          {
            id: 'cer-7',
            front: 'Does Article 30 include the right to teach in the minority\'s own language?',
            back: 'Yes. The right under Article 30 also includes the right of a minority to impart education to its children in its own language.'
          },
          {
            id: 'cer-8',
            front: 'What are the three types of minority educational institutions?',
            back: '1. Seeking recognition AND aid from State → Subject to regulatory power of state\n2. Seeking only recognition (not aid) from State → Subject to regulatory power of state\n3. Neither seeking recognition nor aid → Free to administer, but subject to general laws (contract law, labour law, etc.)'
          },
          {
            id: 'cer-9',
            front: 'Is the right under Article 30 absolute?',
            back: 'No. The right to establish and administer educational institutions is not absolute. It does NOT include the right to maladminister. It is only to ensure equality with the majority, not to place minorities in a more advantageous position.'
          },
          {
            id: 'cer-10',
            front: 'Is there reverse discrimination in favour of minorities under Article 30?',
            back: 'No. The right under Article 30 is only to ensure equality with the majority and is not intended to place minorities in a more advantageous position. There is no reverse discrimination.'
          },
          {
            id: 'cer-11',
            front: 'What benefits does a community get if given national minority status in India? (UPSC 2011)',
            back: '1. Entitled to establish and administer exclusive educational institutions\n2. Can derive benefits from the Prime Minister\'s 15-Point Programme'
          },
          {
            id: 'cer-12',
            front: 'On what grounds can admission to a state-maintained institution NOT be denied (Article 29)?',
            back: 'On grounds only of religion, race, caste, or language.'
          },
        ],
        quiz: [
          {
            id: 'cer-q1',
            question: 'Article 29 provides protection to:',
            options: [
              'Only religious minorities',
              'Only linguistic minorities',
              'Both religious and linguistic minorities, as well as the majority',
              'Only scheduled castes and tribes'
            ],
            correct: 2,
            explanation: 'Article 29 grants protection to both religious and linguistic minorities. SC held that "section of citizens" includes minorities as well as the majority.'
          },
          {
            id: 'cer-q2',
            question: 'Article 30 protection is confined to:',
            options: [
              'Any section of citizens',
              'Only minorities (religious or linguistic)',
              'Only religious minorities',
              'Both minorities and majority'
            ],
            correct: 1,
            explanation: 'Article 30 protection is confined only to minorities (religious or linguistic), unlike Article 29 which extends to any section of citizens.'
          },
          {
            id: 'cer-q3',
            question: 'The term "minority" is defined in:',
            options: [
              'Article 29',
              'Article 30',
              'Eighth Schedule',
              'It is not defined anywhere in the Constitution'
            ],
            correct: 3,
            explanation: 'The term "minority" has not been defined anywhere in the Constitution.'
          },
          {
            id: 'cer-q4',
            question: 'A minority educational institution that neither seeks recognition nor aid from the state is:',
            options: [
              'Completely free from all laws',
              'Subject to regulatory power of the state',
              'Free to administer but subject to general laws (contract, labour, etc.)',
              'Illegal'
            ],
            correct: 2,
            explanation: 'Such institutions are free to administer their affairs but are still subject to general laws like contract law, labour law, etc.'
          },
          {
            id: 'cer-q5',
            question: 'Article 30 includes:',
            options: [
              'Right to maladminister',
              'Reverse discrimination in favour of minorities',
              'Right to establish and administer educational institutions (not absolute)',
              'Right to deny admission to majority community'
            ],
            correct: 2,
            explanation: 'Article 30 grants the right to establish and administer educational institutions, but it is not absolute and does not include the right to maladminister.'
          },
          {
            id: 'cer-q6',
            question: 'Under Article 29, a citizen cannot be denied admission to a state institution on grounds of:',
            options: [
              'Only religion',
              'Religion, race, caste, or language',
              'Only caste',
              'Religion, gender, and age'
            ],
            correct: 1,
            explanation: 'No citizen shall be denied admission on grounds only of religion, race, caste, or language (Article 29).'
          },
          {
            id: 'cer-q7',
            question: 'If a community gets national minority status in India, it is entitled to: (UPSC 2011)',
            options: [
              'Separate electorate and reservation',
              'Establish exclusive educational institutions and benefits from PM\'s 15-Point Programme',
              'Tax exemptions and free land',
              'Automatic seats in Parliament'
            ],
            correct: 1,
            explanation: 'A national minority can establish and administer exclusive educational institutions and derive benefits from the PM\'s 15-Point Programme.'
          },
          {
            id: 'cer-q8',
            question: 'The SC held that the right to conserve language under Article 29 includes:',
            options: [
              'Only the right to teach in that language',
              'The right to agitate for the protection of the language',
              'The right to impose that language on others',
              'The right to make it the official language'
            ],
            correct: 1,
            explanation: 'The SC held that the right to conserve the language includes the right to agitate for the protection of the language.'
          },
          {
            id: 'cer-q9',
            question: 'The right under Article 30 is intended to:',
            options: [
              'Place minorities in a more advantageous position than the majority',
              'Ensure equality with the majority',
              'Give minorities absolute freedom',
              'Override other fundamental rights'
            ],
            correct: 1,
            explanation: 'The right under Article 30 is only to ensure equality with the majority. There is no reverse discrimination in favour of minorities.'
          },
        ]
      },
      {
        id: 'writs-types-and-scope',
        name: 'Writs: Types and Scope',
        flashcards: [
          {
            id: 'wrt-1',
            front: 'Where are writs borrowed from and which courts can issue them?',
            back: 'Borrowed from English prerogative writs (fountain of justice).\nSupreme Court (Article 32) and High Court (Article 226) can issue writs.\nParliament, under Art 32, can empower any other court to issue these writs.'
          },
          {
            id: 'wrt-2',
            front: 'What is Habeas Corpus?',
            back: 'Meaning: "To have the body of."\nUse: To release a person who has been unlawfully detained or imprisoned. Court orders the detaining authority to bring the detained person before it to determine legality of detention.'
          },
          {
            id: 'wrt-3',
            front: 'When is Habeas Corpus NOT issued?',
            back: '- When detention is lawful\n- Contempt of court or legislature\n- Detention by a competent court\n- Outside the court\'s jurisdiction'
          },
          {
            id: 'wrt-4',
            front: 'What is Mandamus?',
            back: 'Meaning: "We command."\nUse: Commands a public authority to perform a public or statutory duty when a lower court, government officer, corporation, or public authority has failed or refused to fulfil its duty.'
          },
          {
            id: 'wrt-5',
            front: 'Against whom can Mandamus NOT be issued?',
            back: '- Private individuals\n- For non-statutory departmental instructions\n- Discretionary duties\n- Contractual obligations\n- The President\n- State Governors\n- Chief Justice acting judicially (UPSC 2022)'
          },
          {
            id: 'wrt-6',
            front: 'What is Prohibition?',
            back: 'Meaning: "To forbid."\nUse: Issued by a higher court to a lower court or tribunal to prevent it from exceeding its jurisdiction or usurping jurisdiction it does not possess.\nOnly issued against judicial and quasi-judicial authorities.'
          },
          {
            id: 'wrt-7',
            front: 'Against whom is Prohibition NOT available?',
            back: 'Not available against:\n- Administrative authorities\n- Legislative bodies\n- Private individuals or bodies (UPSC 2024)'
          },
          {
            id: 'wrt-8',
            front: 'What is Certiorari?',
            back: 'Meaning: "To be certified" or "To be informed."\nUse: Used by a higher court to review and quash a decision of a lower court or tribunal made without jurisdiction or in violation of natural justice.\nInitially against judicial/quasi-judicial authorities; extended to administrative authorities in 1991.'
          },
          {
            id: 'wrt-9',
            front: 'Against whom is Certiorari NOT available?',
            back: 'Not available against:\n- Legislative bodies\n- Private individuals or bodies'
          },
          {
            id: 'wrt-10',
            front: 'What is the key difference between Prohibition and Certiorari?',
            back: 'Prohibition: Issued BEFORE a lower court passes an order (preventive — forbids from exceeding jurisdiction).\nCertiorari: Issued AFTER a lower court has passed an order (corrective — quashes the order).\nAlso: Certiorari was extended to administrative authorities in 1991; Prohibition is still only against judicial/quasi-judicial authorities.'
          },
          {
            id: 'wrt-11',
            front: 'What is Quo Warranto?',
            back: 'Meaning: "By what warrant?"\nUse: Challenges the legality of a person\'s claim to a public office. Restrains the person from acting in an office to which he/she is not entitled.\nApplicable to substantive public offices of a permanent character created by statute or Constitution.\nCan be sought by any interested person, not necessarily the aggrieved person. (UPSC 2022)'
          },
          {
            id: 'wrt-12',
            front: 'Who can file a Quo Warranto writ?',
            back: 'Any interested person — not necessarily the aggrieved person. This is unique among writs.'
          },
          {
            id: 'wrt-13',
            front: 'What is the significance of Bandhua Mukti Morcha case (1984)?',
            back: 'The SC allowed any concerned citizen to file a PIL for bonded labourers, turning Article 32 from a narrow legal remedy into a direct channel of justice for the voiceless. It expanded the concept of locus standi (who can approach the court).'
          },
          {
            id: 'wrt-14',
            front: 'What is the difference between Article 32 and Article 226 regarding writs?',
            back: 'Article 32: SC can issue writs only for enforcement of Fundamental Rights.\nArticle 226: HC can issue writs for enforcement of Fundamental Rights AND for any other purpose (wider scope).'
          },
        ],
        quiz: [
          {
            id: 'wrt-q1',
            question: 'Habeas Corpus literally means:',
            options: ['We command', 'To have the body of', 'To forbid', 'By what warrant'],
            correct: 1,
            explanation: 'Habeas Corpus means "To have the body of." It is used to release a person unlawfully detained.'
          },
          {
            id: 'wrt-q2',
            question: 'Mandamus cannot be issued against:',
            options: [
              'A government officer',
              'A corporation',
              'The President and State Governors',
              'A lower court'
            ],
            correct: 2,
            explanation: 'Mandamus cannot be issued against the President, State Governors, Chief Justice acting judicially, private individuals, for discretionary duties, or contractual obligations.'
          },
          {
            id: 'wrt-q3',
            question: 'The writ of Prohibition is issued against:',
            options: [
              'Administrative authorities only',
              'Judicial and quasi-judicial authorities only',
              'Legislative bodies',
              'Private individuals'
            ],
            correct: 1,
            explanation: 'Prohibition is only issued against judicial and quasi-judicial authorities. Not available against administrative authorities, legislative bodies, or private individuals.'
          },
          {
            id: 'wrt-q4',
            question: 'Certiorari was extended to administrative authorities in:',
            options: ['1950', '1973', '1985', '1991'],
            correct: 3,
            explanation: 'Certiorari was initially only against judicial/quasi-judicial authorities but was extended to administrative authorities in 1991.'
          },
          {
            id: 'wrt-q5',
            question: 'Quo Warranto can be filed by:',
            options: [
              'Only the aggrieved person',
              'Only a government authority',
              'Any interested person, not necessarily the aggrieved person',
              'Only the Attorney General'
            ],
            correct: 2,
            explanation: 'Quo Warranto is unique — it can be sought by any interested person, not necessarily the aggrieved person.'
          },
          {
            id: 'wrt-q6',
            question: 'Which writ means "We command"?',
            options: ['Habeas Corpus', 'Mandamus', 'Prohibition', 'Certiorari'],
            correct: 1,
            explanation: 'Mandamus means "We command." It commands a public authority to perform its public or statutory duty.'
          },
          {
            id: 'wrt-q7',
            question: 'The key difference between Prohibition and Certiorari is:',
            options: [
              'Prohibition is corrective, Certiorari is preventive',
              'Prohibition is preventive (before order), Certiorari is corrective (after order)',
              'Both are the same',
              'Prohibition applies to administrative bodies, Certiorari does not'
            ],
            correct: 1,
            explanation: 'Prohibition is preventive (issued before the order to prevent exceeding jurisdiction). Certiorari is corrective (issued after to quash the order).'
          },
          {
            id: 'wrt-q8',
            question: 'The Bandhua Mukti Morcha case (1984) is significant because:',
            options: [
              'It struck down Article 32',
              'It expanded locus standi, allowing any citizen to file PIL under Article 32',
              'It restricted writs to only Supreme Court',
              'It defined Habeas Corpus'
            ],
            correct: 1,
            explanation: 'The SC allowed any concerned citizen to file a PIL for bonded labourers, expanding Article 32 into a direct channel of justice for the voiceless.'
          },
          {
            id: 'wrt-q9',
            question: 'Article 226 (HC writs) is wider than Article 32 (SC writs) because:',
            options: [
              'HC can issue more types of writs',
              'HC can issue writs for FRs AND any other purpose',
              'SC cannot issue Habeas Corpus',
              'HC writs are binding on SC'
            ],
            correct: 1,
            explanation: 'Article 32: SC writs only for Fundamental Rights. Article 226: HC writs for FRs AND any other purpose — wider scope.'
          },
          {
            id: 'wrt-q10',
            question: 'Quo Warranto is applicable to:',
            options: [
              'Any private office',
              'Temporary government positions',
              'Substantive public offices of permanent character created by statute or Constitution',
              'All types of employment'
            ],
            correct: 2,
            explanation: 'Quo Warranto is applicable to substantive public offices of a permanent character created by statute or the Constitution.'
          },
        ]
      },
      {
        id: 'exceptions-to-fundamental-rights',
        name: 'Exceptions to Fundamental Rights (Articles 31A, 31B, 31C)',
        flashcards: [
          {
            id: 'efr-1',
            front: 'What does Article 31A do?',
            back: 'Saves five categories of laws from being challenged for contravention of Fundamental Rights under Article 14 and Article 19.'
          },
          {
            id: 'efr-2',
            front: 'What are the five categories of laws saved by Article 31A?',
            back: '1. Acquisition of estates and related rights by the State\n2. Taking over the management of properties by the State\n3. Amalgamation of corporations\n4. Extinguishment or modification of rights of directors or shareholders of corporations\n5. Extinguishment or modification of mining leases'
          },
          {
            id: 'efr-3',
            front: 'From which Fundamental Rights does Article 31A provide protection?',
            back: 'Article 14 (Right to Equality) and Article 19 (Protection of certain rights regarding freedom of speech, etc.).'
          },
          {
            id: 'efr-4',
            front: 'What does Article 31B do?',
            back: 'Saves the acts and regulations included in the Ninth Schedule from being challenged for contravention of any Fundamental Rights. The Ninth Schedule was added by the First Amendment in 1951.'
          },
          {
            id: 'efr-5',
            front: 'What did the SC hold in the I.R. Coelho case (2007) regarding Article 31B?',
            back: 'No blanket immunity from judicial review for laws in the Ninth Schedule. Judicial review is a "basic feature" of the Constitution. Laws placed in the Ninth Schedule after April 24, 1973 (date of Kesavananda Bharati judgement) are open to challenge if they violate Fundamental Rights. (UPSC 2018)'
          },
          {
            id: 'efr-6',
            front: 'What is the significance of April 24, 1973 regarding the Ninth Schedule?',
            back: 'It is the date of the Kesavananda Bharati judgement. After the I.R. Coelho case (2007), laws placed in the Ninth Schedule after this date are open to judicial review if they violate FRs that form part of the basic structure.'
          },
          {
            id: 'efr-7',
            front: 'What does Article 31C provide?',
            back: 'No law that seeks to implement the socialistic DPSPs specified in Article 39(b) or (c) shall be void on the ground of contravention of the FRs conferred by Article 14 or Article 19.'
          },
          {
            id: 'efr-8',
            front: 'Which DPSPs are protected under Article 31C?',
            back: 'Article 39(b): Ownership and control of material resources for common good\nArticle 39(c): Prevention of concentration of wealth to the common detriment'
          },
          {
            id: 'efr-9',
            front: 'Compare Articles 31A, 31B, and 31C.',
            back: 'Article 31A: Saves 5 specific categories of laws from Art 14 and 19\nArticle 31B: Saves all laws in the Ninth Schedule from ALL FRs (but post-1973 laws can be challenged — I.R. Coelho)\nArticle 31C: Saves laws implementing Art 39(b)/(c) DPSPs from Art 14 and 19'
          },
        ],
        quiz: [
          {
            id: 'efr-q1',
            question: 'Article 31A saves laws from challenge under:',
            options: [
              'All Fundamental Rights',
              'Only Article 21',
              'Articles 14 and 19',
              'Articles 14, 19, and 21'
            ],
            correct: 2,
            explanation: 'Article 31A saves five categories of laws from being challenged under Article 14 (Equality) and Article 19 (Freedoms).'
          },
          {
            id: 'efr-q2',
            question: 'Which of the following is NOT one of the five categories under Article 31A?',
            options: [
              'Acquisition of estates by the State',
              'Amalgamation of corporations',
              'Regulation of religious institutions',
              'Extinguishment of mining leases'
            ],
            correct: 2,
            explanation: 'The five categories are: acquisition of estates, taking over management of properties, amalgamation of corporations, modification of director/shareholder rights, and modification of mining leases.'
          },
          {
            id: 'efr-q3',
            question: 'The Ninth Schedule was added by:',
            options: ['Original Constitution', '1st Amendment, 1951', '24th Amendment, 1971', '42nd Amendment, 1976'],
            correct: 1,
            explanation: 'The Ninth Schedule was added by the First Amendment in 1951 to protect land reform laws from judicial review.'
          },
          {
            id: 'efr-q4',
            question: 'In the I.R. Coelho case (2007), the SC held that: (UPSC 2018)',
            options: [
              'All laws in the Ninth Schedule are immune from judicial review',
              'Laws placed after April 24, 1973 in the Ninth Schedule are open to challenge',
              'The Ninth Schedule should be abolished',
              'Only Parliament can review Ninth Schedule laws'
            ],
            correct: 1,
            explanation: 'SC held there is no blanket immunity. Laws placed in the Ninth Schedule after April 24, 1973 (Kesavananda Bharati date) are open to challenge if they violate FRs.'
          },
          {
            id: 'efr-q5',
            question: 'Article 31C protects laws implementing which DPSPs?',
            options: [
              'All DPSPs',
              'Article 39(b) and 39(c) only',
              'Article 38 and 39',
              'Articles 36 to 51'
            ],
            correct: 1,
            explanation: 'Article 31C protects laws implementing Article 39(b) — material resources for common good — and 39(c) — prevention of concentration of wealth.'
          },
          {
            id: 'efr-q6',
            question: 'The date April 24, 1973 is significant because:',
            options: [
              'The Constitution was adopted on this date',
              'The Kesavananda Bharati judgement was delivered',
              'The First Amendment was passed',
              'Article 31B was added'
            ],
            correct: 1,
            explanation: 'April 24, 1973 is the date of the Kesavananda Bharati judgement. After I.R. Coelho, laws added to the Ninth Schedule after this date are open to judicial review.'
          },
          {
            id: 'efr-q7',
            question: 'Which Article provides the broadest protection from Fundamental Rights?',
            options: [
              'Article 31A (5 categories, Art 14 & 19)',
              'Article 31B (Ninth Schedule, all FRs)',
              'Article 31C (DPSPs, Art 14 & 19)',
              'All provide equal protection'
            ],
            correct: 1,
            explanation: 'Article 31B provides the broadest protection — it saves Ninth Schedule laws from ALL Fundamental Rights (though post-1973 laws can now be challenged after I.R. Coelho).'
          },
          {
            id: 'efr-q8',
            question: 'Article 31C protects laws from contravention of:',
            options: [
              'All Fundamental Rights',
              'Article 14 and Article 19 only',
              'Article 21 only',
              'Articles 14, 19, and 21'
            ],
            correct: 1,
            explanation: 'Article 31C protects laws implementing Art 39(b)/(c) from contravention of Article 14 (Equality) and Article 19 (Freedoms) only.'
          },
        ]
      },
      {
        id: 'rights-outside-part-iii-and-udhr',
        name: 'Rights Outside Part III & UDHR',
        flashcards: [
          {
            id: 'rop-1',
            front: 'What does Article 265 (Part XII) state?',
            back: 'No tax shall be levied or collected except by authority of law.'
          },
          {
            id: 'rop-2',
            front: 'What does Article 300-A (Part XII) state?',
            back: 'No person shall be deprived of his property save by authority of law. (Right to property is now a legal right, not a Fundamental Right — moved here by the 44th Amendment.)'
          },
          {
            id: 'rop-3',
            front: 'What does Article 301 (Part XIII) state?',
            back: 'Trade, commerce and intercourse throughout the territory of India shall be free.'
          },
          {
            id: 'rop-4',
            front: 'What does Article 326 (Part XV) provide? (UPSC 2017)',
            back: 'Adult Suffrage (Right to Vote) — it is a constitutional right.'
          },
          {
            id: 'rop-5',
            front: 'What did the 61st Constitutional Amendment, 1989 do?',
            back: 'Lowered the voting age for elections to Lok Sabha and State Legislative Assemblies from 21 to 18 years.'
          },
          {
            id: 'rop-6',
            front: 'When was the UDHR announced and by whom?',
            back: 'The General Assembly of the United Nations announced the Universal Declaration of Human Rights (UDHR) on 10 December 1948. It contains 30 rights and freedoms.'
          },
          {
            id: 'rop-7',
            front: 'What does Article 26 of the UDHR state?',
            back: 'Right to free elementary education.'
          },
          {
            id: 'rop-8',
            front: 'What does Article 27 of the UDHR state?',
            back: 'Right to cultural participation and protection of intellectual work.'
          },
          {
            id: 'rop-9',
            front: 'How does the UDHR reflect in the Indian Constitution? (UPSC 2020)',
            back: 'UDHR is reflected in:\n- Fundamental Rights\n- DPSPs\n- Fundamental Duties\n- The Preamble\nIt promises economic, social, political, cultural and civic rights for a life free from want and fear.'
          },
          {
            id: 'rop-10',
            front: 'How does the Preamble relate to UDHR? (UPSC 2020)',
            back: 'The Preamble\'s Justice, Equality, and Liberty reflect Article 3 of UDHR: right to life, liberty, and security.'
          },
          {
            id: 'rop-11',
            front: 'How do DPSPs relate to UDHR? (UPSC 2020)',
            back: 'DPSPs align with Article 22 of UDHR, ensuring social security and justice.'
          },
          {
            id: 'rop-12',
            front: 'How do Fundamental Duties relate to UDHR? (UPSC 2020)',
            back: 'Fundamental Duties (Article 51A) are civic obligations, including ensuring education for children aged 6-14.'
          },
        ],
        quiz: [
          {
            id: 'rop-q1',
            question: 'Article 300-A states:',
            options: [
              'Right to property is a Fundamental Right',
              'No person shall be deprived of property save by authority of law',
              'Property can be acquired without compensation',
              'Only the state can own property'
            ],
            correct: 1,
            explanation: 'Article 300-A (Part XII) provides that no person shall be deprived of his property save by authority of law. It is a legal right, not a Fundamental Right.'
          },
          {
            id: 'rop-q2',
            question: 'The voting age was lowered from 21 to 18 by:',
            options: ['52nd Amendment', '61st Amendment', '73rd Amendment', '42nd Amendment'],
            correct: 1,
            explanation: 'The 61st Constitutional Amendment, 1989 lowered the voting age from 21 to 18 years.'
          },
          {
            id: 'rop-q3',
            question: 'Article 326 provides for: (UPSC 2017)',
            options: [
              'Right to Education',
              'Right to Property',
              'Adult Suffrage (Right to Vote)',
              'Freedom of Trade'
            ],
            correct: 2,
            explanation: 'Article 326 (Part XV) provides for Adult Suffrage — the constitutional right to vote.'
          },
          {
            id: 'rop-q4',
            question: 'The UDHR was announced on:',
            options: ['26 January 1950', '15 August 1947', '10 December 1948', '26 November 1949'],
            correct: 2,
            explanation: 'The UDHR was announced by the UN General Assembly on 10 December 1948, containing 30 rights and freedoms.'
          },
          {
            id: 'rop-q5',
            question: 'Article 265 states that no tax shall be levied except by:',
            options: [
              'Executive order',
              'Authority of law',
              'Presidential decree',
              'Cabinet resolution'
            ],
            correct: 1,
            explanation: 'Article 265 (Part XII) states: No tax shall be levied or collected except by authority of law.'
          },
          {
            id: 'rop-q6',
            question: 'The Preamble\'s Justice, Equality, and Liberty reflect which UDHR Article? (UPSC 2020)',
            options: ['Article 1', 'Article 3', 'Article 22', 'Article 26'],
            correct: 1,
            explanation: 'The Preamble reflects Article 3 of UDHR: right to life, liberty, and security.'
          },
          {
            id: 'rop-q7',
            question: 'How many rights and freedoms does the UDHR contain?',
            options: ['20', '25', '30', '35'],
            correct: 2,
            explanation: 'The UDHR contains 30 rights and freedoms that belong to everyone.'
          },
          {
            id: 'rop-q8',
            question: 'DPSPs align with which Article of the UDHR? (UPSC 2020)',
            options: ['Article 3', 'Article 22', 'Article 26', 'Article 27'],
            correct: 1,
            explanation: 'DPSPs align with Article 22 of UDHR, ensuring social security and justice.'
          },
          {
            id: 'rop-q9',
            question: 'Article 301 of the Indian Constitution states:',
            options: [
              'No tax without authority of law',
              'Right to property by authority of law',
              'Trade, commerce and intercourse throughout India shall be free',
              'Adult suffrage for all citizens'
            ],
            correct: 2,
            explanation: 'Article 301 (Part XIII) provides that trade, commerce and intercourse throughout the territory of India shall be free.'
          },
        ]
      }
    ]
  },
  {
    id: 'directive-principles',
    name: 'Directive Principles of State Policy (Part IV: Articles 36-51)',
    icon: '🎯',
    subtopics: [
      {
        id: 'new-directive-principles',
        name: 'New Directive Principles (Amendments)',
        flashcards: [
          {
            id: 'ndp-1',
            front: 'Which new DPSPs were added by the 42nd CAA, 1976? (UPSC 2017)',
            back: 'Added four new articles:\n- Article 39(f): Healthy development of children\n- Article 39A: Equal justice and free legal aid\n- Article 43A: Participation of workers in management of industries\n- Article 48A: Protection of environment, forests, and wildlife'
          },
          {
            id: 'ndp-2',
            front: 'What did the 42nd CAA (1976) do regarding the Concurrent List in relation to DPSPs?',
            back: 'Shifted five subjects from State List to Concurrent List:\n1. Education\n2. Forests\n3. Weights and Measures\n4. Protection of Wild Animals and Birds\n5. Administration of Justice'
          },
          {
            id: 'ndp-3',
            front: 'What DPSP was added by the 44th CAA, 1978?',
            back: 'Added Article 38(2): To minimise inequalities in income, status, facilities and opportunities.'
          },
          {
            id: 'ndp-4',
            front: 'What change did the 86th CAA, 2002 make to DPSPs?',
            back: 'Changed the subject matter of Article 45. Elementary education was made a Fundamental Right under Article 21A. Article 45 now directs the state to provide early childhood care and education for children until they complete the age of six years.'
          },
          {
            id: 'ndp-5',
            front: 'What DPSP was added by the 97th CAA, 2011?',
            back: 'Added Article 43B: To promote formation, functioning and management of Co-operative Societies.'
          },
          {
            id: 'ndp-6',
            front: 'What does Article 39A provide?',
            back: 'Equal justice and free legal aid — the State shall secure that the legal system promotes justice on the basis of equal opportunity and shall provide free legal aid.'
          },
          {
            id: 'ndp-7',
            front: 'What does Article 43A provide?',
            back: 'Participation of workers in management of industries — the State shall take steps to secure participation of workers in the management of undertakings, establishments or other organisations.'
          },
          {
            id: 'ndp-8',
            front: 'What does Article 48A provide?',
            back: 'Protection and improvement of environment and safeguarding of forests and wildlife.'
          },
          {
            id: 'ndp-9',
            front: 'List all amendments that added new DPSPs in chronological order.',
            back: '1. 42nd CAA, 1976: Art 39(f), 39A, 43A, 48A\n2. 44th CAA, 1978: Art 38(2)\n3. 86th CAA, 2002: Modified Art 45 (early childhood care)\n4. 97th CAA, 2011: Art 43B (Co-operative Societies)'
          },
        ],
        quiz: [
          {
            id: 'ndp-q1',
            question: 'Article 39A (Equal justice and free legal aid) was added by: (UPSC 2017)',
            options: ['1st Amendment, 1951', '42nd Amendment, 1976', '44th Amendment, 1978', '86th Amendment, 2002'],
            correct: 1,
            explanation: 'Article 39A was added by the 42nd CAA, 1976 along with Articles 39(f), 43A, and 48A.'
          },
          {
            id: 'ndp-q2',
            question: 'Article 38(2) — minimise inequalities in income, status — was added by:',
            options: ['42nd CAA, 1976', '44th CAA, 1978', '86th CAA, 2002', '97th CAA, 2011'],
            correct: 1,
            explanation: 'Article 38(2) was added by the 44th CAA, 1978 to minimise inequalities in income, status, facilities and opportunities.'
          },
          {
            id: 'ndp-q3',
            question: 'Article 43B (Co-operative Societies) was added by:',
            options: ['86th CAA, 2002', '92nd CAA, 2003', '97th CAA, 2011', '101st CAA, 2017'],
            correct: 2,
            explanation: 'Article 43B was added by the 97th CAA, 2011 to promote formation, functioning and management of Co-operative Societies.'
          },
          {
            id: 'ndp-q4',
            question: 'The 86th CAA, 2002 changed Article 45 to deal with:',
            options: [
              'Free legal aid',
              'Early childhood care and education for children until age 6',
              'Workers participation in management',
              'Protection of environment'
            ],
            correct: 1,
            explanation: 'The 86th CAA changed Article 45 — elementary education became FR under Art 21A, and Art 45 now directs early childhood care until age 6.'
          },
          {
            id: 'ndp-q5',
            question: 'Which of the following was NOT added by the 42nd CAA, 1976?',
            options: ['Article 39A', 'Article 43A', 'Article 48A', 'Article 38(2)'],
            correct: 3,
            explanation: 'Article 38(2) was added by the 44th CAA, 1978. The 42nd CAA added Articles 39(f), 39A, 43A, and 48A.'
          },
          {
            id: 'ndp-q6',
            question: 'Article 48A deals with:',
            options: [
              'Equal justice and free legal aid',
              'Workers participation in management',
              'Protection of environment, forests and wildlife',
              'Co-operative Societies'
            ],
            correct: 2,
            explanation: 'Article 48A deals with protection and improvement of environment and safeguarding of forests and wildlife.'
          },
          {
            id: 'ndp-q7',
            question: 'The 42nd CAA shifted how many subjects from State to Concurrent List?',
            options: ['3', '4', '5', '6'],
            correct: 2,
            explanation: 'Five subjects: Education, Forests, Weights & Measures, Protection of Wild Animals and Birds, and Administration of Justice.'
          },
          {
            id: 'ndp-q8',
            question: 'Which amendment made elementary education a Fundamental Right?',
            options: ['42nd CAA, 1976', '44th CAA, 1978', '86th CAA, 2002', '97th CAA, 2011'],
            correct: 2,
            explanation: 'The 86th CAA, 2002 made elementary education a Fundamental Right under Article 21A and modified Article 45 for early childhood care.'
          },
        ]
      },
      {
        id: 'directives-outside-part-iv',
        name: 'Directives Outside Part IV',
        flashcards: [
          {
            id: 'dop-1',
            front: 'What does Article 335 (Part XVI) direct?',
            back: 'Claims of SCs and STs to services — the State shall consider the claims of Scheduled Castes and Scheduled Tribes in making appointments to services and posts.'
          },
          {
            id: 'dop-2',
            front: 'What does Article 350A (Part XVII) direct?',
            back: 'Instruction in mother tongue — facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups.'
          },
          {
            id: 'dop-3',
            front: 'What does Article 351 (Part XVII) direct?',
            back: 'Development of Hindi Language — it shall be the duty of the Union to promote the spread of Hindi language.'
          },
          {
            id: 'dop-4',
            front: 'Are all Directive Principles contained in Part IV?',
            back: 'No. Some directives are found outside Part IV:\n- Article 335 (Part XVI): Claims of SCs & STs to services\n- Article 350A (Part XVII): Instruction in mother tongue\n- Article 351 (Part XVII): Development of Hindi Language'
          },
        ],
        quiz: [
          {
            id: 'dop-q1',
            question: 'Article 335 deals with:',
            options: [
              'Development of Hindi Language',
              'Instruction in mother tongue',
              'Claims of SCs and STs to services',
              'Protection of environment'
            ],
            correct: 2,
            explanation: 'Article 335 (Part XVI) deals with claims of SCs and STs to services and posts.'
          },
          {
            id: 'dop-q2',
            question: 'Article 350A directs:',
            options: [
              'Development of Hindi Language',
              'Instruction in mother tongue at primary stage for linguistic minorities',
              'Claims of SCs and STs to services',
              'Free legal aid'
            ],
            correct: 1,
            explanation: 'Article 350A (Part XVII) directs facilities for instruction in mother tongue at primary stage for children of linguistic minority groups.'
          },
          {
            id: 'dop-q3',
            question: 'Which of the following is a directive found OUTSIDE Part IV?',
            options: [
              'Article 39A — Free legal aid',
              'Article 43B — Co-operative Societies',
              'Article 351 — Development of Hindi Language',
              'Article 48A — Protection of environment'
            ],
            correct: 2,
            explanation: 'Article 351 (Part XVII) is a directive outside Part IV. Articles 39A, 43B, and 48A are all within Part IV.'
          },
          {
            id: 'dop-q4',
            question: 'Article 351 deals with:',
            options: [
              'Claims of SCs and STs',
              'Instruction in mother tongue',
              'Development of Hindi Language',
              'Co-operative Societies'
            ],
            correct: 2,
            explanation: 'Article 351 (Part XVII) directs the Union to promote the spread of Hindi language.'
          },
        ]
      }
    ]
  },
  {
    id: 'fundamental-duties',
    name: 'Fundamental Duties (Part-IVA: Article 51A)',
    icon: '🤝',
    subtopics: [
      {
        id: 'important-cases-fundamental-duties',
        name: 'Important Cases Related to Fundamental Duties',
        flashcards: [
          {
            id: 'icfd-1',
            front: 'What did the Minerva Mills Ltd. vs. Union of India (1980) hold regarding Fundamental Duties?',
            back: 'Upheld the 42nd Amendment but stated that Fundamental Duties are NOT enforceable by courts.'
          },
          {
            id: 'icfd-2',
            front: 'What did the Supreme Court hold in 1992 regarding Fundamental Duties?',
            back: 'In determining the constitutional validity of any law, if the law in question seeks to give effect to FDs, the court may consider such law to be "reasonable" in relation to Article 14 or Article 19 and thus save such law from unconstitutionality.'
          },
          {
            id: 'icfd-3',
            front: 'What was the significance of M.C. Mehta vs. Union of India (2000)?',
            back: 'Mandated one-hour lectures on environmental protection in schools; made it part of the curriculum. (Related to the FD of protecting the environment under Art 51A(g).)'
          },
          {
            id: 'icfd-4',
            front: 'What was held in Ramlila Maidan Incident vs. Home Secretary (2012)?',
            back: 'Affirmed freedom of speech as a fundamental right, subject to reasonable restrictions; highlighted the duty to respect the Constitution.'
          },
          {
            id: 'icfd-5',
            front: 'Are Fundamental Duties enforceable by courts?',
            back: 'No. As per Minerva Mills (1980), FDs are not directly enforceable by courts. However, courts can use them to determine the "reasonableness" of laws under Art 14 and 19 (SC, 1992).'
          },
          {
            id: 'icfd-6',
            front: 'Which amendment added Fundamental Duties?',
            back: 'The 42nd Constitutional Amendment Act, 1976 added Part IVA containing Article 51A with 10 Fundamental Duties. The 86th Amendment (2002) added the 11th duty (education of children aged 6-14).'
          },
          {
            id: 'icfd-7',
            front: 'How can Fundamental Duties help save a law from being struck down?',
            back: 'If a law seeks to give effect to Fundamental Duties, courts may consider it "reasonable" under Art 14 (Equality) or Art 19 (Freedoms), thereby saving it from unconstitutionality. (SC, 1992)'
          },
        ],
        quiz: [
          {
            id: 'icfd-q1',
            question: 'Minerva Mills Ltd. vs. Union of India (1980) held that Fundamental Duties are:',
            options: [
              'Directly enforceable by courts',
              'Not enforceable by courts',
              'Superior to Fundamental Rights',
              'Part of the Basic Structure'
            ],
            correct: 1,
            explanation: 'The SC upheld the 42nd Amendment but stated that Fundamental Duties are NOT enforceable by courts.'
          },
          {
            id: 'icfd-q2',
            question: 'In 1992, the SC held that laws giving effect to FDs may be considered:',
            options: [
              'Unconstitutional',
              'Void under Article 13',
              '"Reasonable" in relation to Art 14 or Art 19',
              'Not subject to judicial review'
            ],
            correct: 2,
            explanation: 'The SC held that courts may consider such laws "reasonable" under Art 14 or 19, thus saving them from unconstitutionality.'
          },
          {
            id: 'icfd-q3',
            question: 'M.C. Mehta vs. Union of India (2000) mandated:',
            options: [
              'Banning all polluting industries',
              'One-hour lectures on environmental protection in schools',
              'Making environmental protection a Fundamental Right',
              'Imposing fines on polluters'
            ],
            correct: 1,
            explanation: 'The SC mandated one-hour lectures on environmental protection in schools, making it part of the curriculum.'
          },
          {
            id: 'icfd-q4',
            question: 'Ramlila Maidan Incident vs. Home Secretary (2012) highlighted:',
            options: [
              'Right to property',
              'Freedom of speech and duty to respect the Constitution',
              'Right to education',
              'Freedom of religion'
            ],
            correct: 1,
            explanation: 'The case affirmed freedom of speech as a fundamental right with reasonable restrictions and highlighted the duty to respect the Constitution.'
          },
          {
            id: 'icfd-q5',
            question: 'Fundamental Duties were added by:',
            options: ['24th Amendment, 1971', '42nd Amendment, 1976', '44th Amendment, 1978', '86th Amendment, 2002'],
            correct: 1,
            explanation: 'The 42nd Amendment (1976) added Part IVA with Article 51A containing 10 FDs. The 86th Amendment (2002) added the 11th duty.'
          },
          {
            id: 'icfd-q6',
            question: 'The 11th Fundamental Duty (education of children aged 6-14) was added by:',
            options: ['42nd Amendment, 1976', '73rd Amendment, 1992', '86th Amendment, 2002', '97th Amendment, 2011'],
            correct: 2,
            explanation: 'The 86th Amendment (2002) added the 11th Fundamental Duty regarding education of children aged 6-14.'
          },
          {
            id: 'icfd-q7',
            question: 'Which of the following correctly describes Fundamental Duties?',
            options: [
              'They are directly enforceable and justiciable',
              'They are not enforceable but courts can use them to test reasonableness of laws',
              'They override Fundamental Rights',
              'They apply only to government officials'
            ],
            correct: 1,
            explanation: 'FDs are not directly enforceable (Minerva Mills, 1980), but courts can use them to determine if a law is "reasonable" under Art 14/19 (SC, 1992).'
          },
        ]
      }
    ]
  },
  {
    id: 'federal-dynamics',
    name: 'Federal Dynamics in India',
    icon: '⚖️',
    subtopics: [
      {
        id: 'distribution-of-tax-revenues',
        name: 'Distribution of Tax Revenues',
        flashcards: [
          {
            id: 'dtr-1',
            front: 'What does Article 268 provide regarding tax distribution?',
            back: 'Levy: Centre\nCollection: States\nAppropriation: States\nTaxes: Stamp duties on shares, cheque, promissory notes, insurance, etc.'
          },
          {
            id: 'dtr-2',
            front: 'What does Article 269 provide regarding tax distribution?',
            back: 'Levy: Centre\nCollection: Centre\nAppropriation: States\nTaxes: Taxes on interstate trade and commerce.\nNote: Revenues do NOT form part of the Consolidated Fund of India.'
          },
          {
            id: 'dtr-3',
            front: 'What does Article 270 provide regarding tax distribution?',
            back: 'Levy: Centre\nCollection: Centre\nAppropriation: Shared between Centre and States\nTaxes: All taxes and duties in the Union List EXCEPT:\n- Duties and taxes referred to in Articles 268, 269, and 269-A\n- Surcharge on taxes and duties referred to in Article 271'
          },
          {
            id: 'dtr-4',
            front: 'What does Article 271 provide regarding tax distribution?',
            back: 'Levy: Centre\nCollection: Centre\nAppropriation: Centre\nTaxes: Surcharge on taxes under Art 269 and 270.\nNote: GST is exempted from this surcharge — this surcharge can\'t be imposed on the GST.'
          },
          {
            id: 'dtr-5',
            front: 'What does Article 269-A provide?',
            back: 'Levy and Collection of GST in the course of Inter-State Trade or Commerce.'
          },
          {
            id: 'dtr-6',
            front: 'What are taxes levied and collected and retained by the States?',
            back: 'These are taxes belonging to the states exclusively, e.g.:\n- Land revenue\n- Tax on mineral rights, etc.'
          },
          {
            id: 'dtr-7',
            front: 'What is the UPSC 2014 note about sales tax on toothpaste?',
            back: 'The sales tax you pay while purchasing a toothpaste is a tax imposed and collected by the State Government.'
          },
          {
            id: 'dtr-8',
            front: 'Which Article\'s revenues do NOT form part of the Consolidated Fund of India?',
            back: 'Article 269 — taxes on interstate trade and commerce. The revenues are assigned to states and do not form part of the Consolidated Fund of India.'
          },
          {
            id: 'dtr-9',
            front: 'Can surcharge under Article 271 be imposed on GST?',
            back: 'No. GST is exempted from the surcharge under Article 271.'
          },
        ],
        quiz: [
          {
            id: 'dtr-q1',
            question: 'Under Article 268, taxes are levied by the Centre but collected and appropriated by:',
            options: ['Centre', 'States', 'Both Centre and States', 'Local bodies'],
            correct: 1,
            explanation: 'Article 268: Levy by Centre, Collection by States, Appropriation by States. E.g., stamp duties on shares, cheques, etc.'
          },
          {
            id: 'dtr-q2',
            question: 'Revenues under Article 269 do NOT form part of:',
            options: [
              'State Consolidated Fund',
              'Consolidated Fund of India',
              'Contingency Fund',
              'Public Account'
            ],
            correct: 1,
            explanation: 'Article 269 revenues (taxes on interstate trade and commerce) do not form part of the Consolidated Fund of India.'
          },
          {
            id: 'dtr-q3',
            question: 'Article 270 covers all Union List taxes EXCEPT:',
            options: [
              'Income tax and customs duty',
              'Taxes under Art 268, 269, 269-A and surcharge under Art 271',
              'GST only',
              'Excise duties only'
            ],
            correct: 1,
            explanation: 'Article 270 covers all Union taxes except those under Art 268, 269, 269-A and surcharge under Art 271.'
          },
          {
            id: 'dtr-q4',
            question: 'GST on inter-state trade is covered under:',
            options: ['Article 268', 'Article 269', 'Article 269-A', 'Article 271'],
            correct: 2,
            explanation: 'Article 269-A deals with levy and collection of GST in the course of inter-state trade or commerce.'
          },
          {
            id: 'dtr-q5',
            question: 'The sales tax on toothpaste is imposed and collected by: (UPSC 2014)',
            options: ['Central Government', 'State Government', 'Local Government', 'Both Centre and State'],
            correct: 1,
            explanation: 'The sales tax on toothpaste is a tax imposed and collected by the State Government.'
          },
          {
            id: 'dtr-q6',
            question: 'Surcharge under Article 271 CANNOT be imposed on:',
            options: ['Income tax', 'Customs duty', 'GST', 'Excise duty'],
            correct: 2,
            explanation: 'GST is exempted from the surcharge under Article 271.'
          },
          {
            id: 'dtr-q7',
            question: 'Under Article 271, the surcharge is levied, collected, and appropriated by:',
            options: ['States', 'Centre', 'Shared between Centre and States', 'Local bodies'],
            correct: 1,
            explanation: 'Article 271: Levy, Collection, and Appropriation all by Centre — surcharge on taxes under Art 269 and 270.'
          },
          {
            id: 'dtr-q8',
            question: 'Land revenue and tax on mineral rights are examples of:',
            options: [
              'Taxes under Article 268',
              'Taxes under Article 269',
              'Taxes levied, collected, and retained by States',
              'Taxes shared under Article 270'
            ],
            correct: 2,
            explanation: 'Land revenue and tax on mineral rights are taxes belonging to the states exclusively — levied, collected, and retained by states.'
          },
        ]
      }
    ]
  },
  {
    id: 'president-vp-governor',
    name: 'President, Vice President and Governor',
    icon: '🏛️',
    subtopics: [
      {
        id: 'qualifications-term-removal',
        name: 'Qualifications, Term, Impeachment & Vacancy',
        flashcards: [
          {
            id: 'pvg-1',
            front: 'What are the qualifications to become President?',
            back: '- Citizen of India\n- 35+ years old\n- Qualified for Lok Sabha election\n- No office of profit'
          },
          {
            id: 'pvg-2',
            front: 'What are the qualifications to become Governor?',
            back: '- Citizen of India\n- 35+ years old\n- Preferably an outsider to the state\n- President consults CM (not always followed)'
          },
          {
            id: 'pvg-3',
            front: 'What is the term of the President?',
            back: '- 5 years from taking office\n- Resignation to Vice President\n- Can be re-elected without limit\n- Holds office until successor takes charge to avoid "interregnum"'
          },
          {
            id: 'pvg-4',
            front: 'What is the term of the Governor?',
            back: '- 5 years, subject to President\'s pleasure\n- No fixed tenure\n- Resignation to President\n- Can be transferred or reappointed to same/another state\n- Holds office until successor takes charge to avoid "interregnum"'
          },
          {
            id: 'pvg-5',
            front: 'How is the President impeached?',
            back: '- For violation of Constitution (undefined)\n- Initiated by 1/4th members of either house with 14-day notice\n- 2/3 majority of total membership of house needed in both houses\n- Quasi-judicial process\n- No President impeached so far'
          },
          {
            id: 'pvg-6',
            front: 'How is the Governor removed? (UPSC 2013)',
            back: '- No specific grounds for removal by President\n- Not justiciable (Surya Narain case, 1981)\n- Governor serves at the President\'s pleasure'
          },
          {
            id: 'pvg-7',
            front: 'What happens when the President\'s office falls vacant?',
            back: '- Causes: Tenure expiry, resignation, impeachment, death\n- VP acts as President during vacancy\n- New election within 6 months\n- New President serves a full term of 5 years\n- No interim term for VP if President\'s tenure is extended beyond 5 years due to delayed elections'
          },
          {
            id: 'pvg-8',
            front: 'What happens when the Governor\'s office falls vacant?',
            back: '- Causes: Tenure expiry, resignation, death, or removal\n- President may appoint an interim governor until a successor assumes charge'
          },
        ],
        quiz: [
          {
            id: 'pvg-q1',
            question: 'The President submits resignation to:',
            options: ['Chief Justice of India', 'Speaker of Lok Sabha', 'Vice President', 'Prime Minister'],
            correct: 2,
            explanation: 'The President submits resignation to the Vice President.'
          },
          {
            id: 'pvg-q2',
            question: 'Governor\'s removal by the President is: (UPSC 2013)',
            options: ['Justiciable', 'Not justiciable', 'Requires Parliament approval', 'Requires HC approval'],
            correct: 1,
            explanation: 'Governor\'s removal is not justiciable as held in Surya Narain case (1981). Governor serves at President\'s pleasure.'
          },
          {
            id: 'pvg-q3',
            question: 'Impeachment of the President requires:',
            options: [
              'Simple majority in both houses',
              'Absolute majority in both houses',
              '2/3 majority of total membership in both houses',
              '3/4 majority in Lok Sabha only'
            ],
            correct: 2,
            explanation: 'Impeachment requires 2/3 majority of total membership of the house in both houses, initiated by 1/4th members with 14-day notice.'
          },
          {
            id: 'pvg-q4',
            question: 'When the President\'s office is vacant, new election must be held within:',
            options: ['3 months', '6 months', '1 year', 'No time limit'],
            correct: 1,
            explanation: 'New presidential election must be held within 6 months of vacancy. VP acts as President meanwhile.'
          },
          {
            id: 'pvg-q5',
            question: 'The Governor submits resignation to:',
            options: ['Chief Minister', 'President', 'Vice President', 'Speaker of State Assembly'],
            correct: 1,
            explanation: 'The Governor submits resignation to the President.'
          },
          {
            id: 'pvg-q6',
            question: 'A Governor can be:',
            options: [
              'Only appointed to one state in their lifetime',
              'Transferred or reappointed to same/another state',
              'Impeached like the President',
              'Removed only by Parliament'
            ],
            correct: 1,
            explanation: 'A Governor can be transferred or reappointed to the same or another state by the President.'
          },
        ]
      },
      {
        id: 'executive-legislative-powers',
        name: 'Executive & Legislative Powers',
        flashcards: [
          {
            id: 'elp-1',
            front: 'What are the Executive Powers of the President?',
            back: '- All executive actions taken in his name\n- Makes rules for authenticating orders and business transactions of the Union\n- Requires PM to submit matters for CoM consideration\n- Appoints commissions for SCs, STs, OBCs\n- Appoints inter-state council and UT administrators\n- Appoints PM, Ministers, AG, CAG, CEC, other election commissioners, Governors, chairpersons of commissions, UT administrators\n- Declares Scheduled Areas'
          },
          {
            id: 'elp-2',
            front: 'What are the Executive Powers of the Governor?',
            back: '- Executes state executive actions in his name\n- Appoints key state officials, members of State Finance Commission, SPSC\n- Promulgates ordinances when the state legislature is not in session'
          },
          {
            id: 'elp-3',
            front: 'What are the Legislative Powers of the President?',
            back: '- Integral part of Parliament\n- Summons, prorogues, dissolves Lok Sabha\n- Can summon joint sittings of both Houses\n- Addresses Parliament at start of each year and after general elections\n- Sends messages to Parliament on bills\n- Prior permission for certain bills\n- Nominates 12 RS members, used to nominate 2 LS Anglo-Indian members until 2020\n- Promulgates ordinances (approved within 6 weeks)\n- Alters state boundaries/creates new states\n- Lays reports of Finance Commission, UPSC and CAG\n- Decisions on MP disqualification'
          },
          {
            id: 'elp-4',
            front: 'What are the Legislative Powers of the Governor? (UPSC 2019)',
            back: '- Integral part of the state legislature\n- Summons, prorogues, dissolves the state legislative assembly\n- Addresses the state legislature after general elections and at the beginning of each year (UPSC 2019)\n- Sends messages to the state legislature\n- Nominates 1/6 of State Legislative Council members and used to nominate one Anglo-Indian (until 2020)\n- Promulgates ordinances (approved within 6 weeks)\n- Lays reports of State Finance Commission, SPSC, CAG\n- Decisions on disqualification of MLAs'
          },
        ],
        quiz: [
          {
            id: 'elp-q1',
            question: 'The President nominates how many members to the Rajya Sabha?',
            options: ['2', '6', '12', '14'],
            correct: 2,
            explanation: 'The President nominates 12 members to the Rajya Sabha.'
          },
          {
            id: 'elp-q2',
            question: 'Who can summon joint sittings of both Houses of Parliament?',
            options: ['Prime Minister', 'Speaker', 'President', 'Vice President'],
            correct: 2,
            explanation: 'The President can summon joint sittings of both Houses of Parliament.'
          },
          {
            id: 'elp-q3',
            question: 'The Governor addresses the state legislature: (UPSC 2019)',
            options: [
              'Only at the start of each year',
              'After general elections and at the beginning of each year',
              'Only when summoned by CM',
              'Only during budget sessions'
            ],
            correct: 1,
            explanation: 'The Governor addresses the state legislature after general elections and at the beginning of each year.'
          },
          {
            id: 'elp-q4',
            question: 'The Governor nominates what fraction of State Legislative Council members?',
            options: ['1/3', '1/4', '1/6', '1/12'],
            correct: 2,
            explanation: 'The Governor nominates 1/6 of State Legislative Council members.'
          },
          {
            id: 'elp-q5',
            question: 'Who appoints the CAG and AG?',
            options: ['Prime Minister', 'President', 'Parliament', 'Chief Justice'],
            correct: 1,
            explanation: 'The President appoints the Comptroller and Auditor General (CAG) and the Attorney General (AG).'
          },
          {
            id: 'elp-q6',
            question: 'Who can dissolve the Lok Sabha?',
            options: ['Vice President', 'Prime Minister', 'Speaker', 'President'],
            correct: 3,
            explanation: 'The President summons, prorogues, and dissolves the Lok Sabha.'
          },
        ]
      },
      {
        id: 'judicial-diplomatic-military-powers',
        name: 'Judicial, Diplomatic & Military Powers',
        flashcards: [
          {
            id: 'jdm-1',
            front: 'What are the Judicial Powers of the President?',
            back: '- Appoints CJI, SC, and HC judges\n- Seeks SC advisory opinion (non-binding)\n- Grants pardon, reprieve, respite, remission, or commutation of punishment for Union law offences, court-martial sentences, and death sentences'
          },
          {
            id: 'jdm-2',
            front: 'What are the Judicial Powers of the Governor?',
            back: '- Consulted by President for HC judge appointments\n- Appoints district judges in consultation with HC\n- Grants pardon, reprieve, respite, remission, or commutation of punishment for offences under state laws\n- CANNOT pardon death sentence'
          },
          {
            id: 'jdm-3',
            front: 'Key difference in pardon powers: President vs Governor?',
            back: 'President can pardon death sentences. Governor CANNOT pardon death sentence.'
          },
          {
            id: 'jdm-4',
            front: 'What are the Diplomatic Powers of the President?',
            back: '- Negotiates and concludes international treaties (subject to Parliament\'s approval)\n- Represents India in international forums, sends and receives diplomats'
          },
          {
            id: 'jdm-5',
            front: 'Does the Governor have diplomatic powers?',
            back: 'No. The Governor has no diplomatic powers.'
          },
          {
            id: 'jdm-6',
            front: 'What are the Military Powers of the President?',
            back: '- Supreme Commander of India\'s defence forces\n- Appoints Army, Navy, Air Force chiefs\n- Can declare war/peace, subject to Parliament\'s approval'
          },
          {
            id: 'jdm-7',
            front: 'Does the Governor have military powers?',
            back: 'No. The Governor has no military powers.'
          },
        ],
        quiz: [
          {
            id: 'jdm-q1',
            question: 'Who CANNOT pardon a death sentence?',
            options: ['President', 'Governor', 'Supreme Court', 'Both Governor and SC'],
            correct: 1,
            explanation: 'The Governor cannot pardon a death sentence. Only the President has that power.'
          },
          {
            id: 'jdm-q2',
            question: 'The President\'s advisory opinion from the SC under Article 143 is:',
            options: ['Binding on the President', 'Non-binding', 'Binding on Parliament', 'Binding on all courts'],
            correct: 1,
            explanation: 'The SC advisory opinion sought by the President is non-binding.'
          },
          {
            id: 'jdm-q3',
            question: 'The Governor appoints district judges in consultation with:',
            options: ['President', 'Chief Minister', 'High Court', 'Supreme Court'],
            correct: 2,
            explanation: 'The Governor appoints district judges in consultation with the High Court.'
          },
          {
            id: 'jdm-q4',
            question: 'The Supreme Commander of India\'s defence forces is:',
            options: ['Prime Minister', 'Defence Minister', 'President', 'Army Chief'],
            correct: 2,
            explanation: 'The President is the Supreme Commander of India\'s defence forces.'
          },
          {
            id: 'jdm-q5',
            question: 'International treaties negotiated by the President are subject to:',
            options: ['SC approval', 'Parliament\'s approval', 'Governor\'s approval', 'No approval needed'],
            correct: 1,
            explanation: 'International treaties are negotiated and concluded by the President, subject to Parliament\'s approval.'
          },
        ]
      },
      {
        id: 'ordinance-powers',
        name: 'Ordinance Powers (Art 123 & Art 213)',
        flashcards: [
          {
            id: 'ord-1',
            front: 'When can the President issue ordinances? (Article 123)',
            back: '- When Parliament is not in session\n- Must be laid before both Houses when Parliament reassembles\n- Approved within 6 weeks to become an Act\n- Total validity: 6 months + 6 weeks\n- Cannot amend the Constitution\n- Judicial Review: 44th Amendment allows President\'s satisfaction to be questioned in court'
          },
          {
            id: 'ord-2',
            front: 'When can the Governor issue ordinances? (Article 213)',
            back: '- When the state legislature is not in session\n- Valid for 6 weeks after the state legislature reassembles\n- Total maximum validity: 6 months + 6 weeks\n- Must be laid before the legislature upon reassembly\n- Ordinances require the President\'s instructions in certain cases, such as bills requiring Presidential assent'
          },
          {
            id: 'ord-3',
            front: 'What did the SC hold in D.C. Wadhwa case (1987) regarding ordinances?',
            back: 'SC held that repeated re-promulgation of ordinances is unconstitutional.'
          },
          {
            id: 'ord-4',
            front: 'Key difference: President\'s ordinances vs Governor\'s ordinances?',
            back: 'President: 44th Amendment allows judicial review of satisfaction.\nGovernor: Ordinances may require President\'s instructions in certain cases.\nBoth: Cannot be issued when legislature is in session; valid for 6 weeks after reassembly; total max life = 6 months + 6 weeks.'
          },
        ],
        quiz: [
          {
            id: 'ord-q1',
            question: 'The maximum validity of a Presidential ordinance is:',
            options: ['6 weeks', '6 months', '6 months + 6 weeks', '1 year'],
            correct: 2,
            explanation: 'Total validity is 6 months + 6 weeks (6 months max gap between sessions + 6 weeks after reassembly).'
          },
          {
            id: 'ord-q2',
            question: 'In D.C. Wadhwa case (1987), the SC held:',
            options: [
              'Ordinances can amend the Constitution',
              'Repeated re-promulgation of ordinances is unconstitutional',
              'Governor can issue ordinances without President\'s approval',
              'Ordinances have unlimited validity'
            ],
            correct: 1,
            explanation: 'SC held that repeated re-promulgation of ordinances is unconstitutional.'
          },
          {
            id: 'ord-q3',
            question: 'Governor\'s ordinances may require instructions from:',
            options: ['Chief Minister', 'President', 'High Court', 'Parliament'],
            correct: 1,
            explanation: 'Governor\'s ordinances require the President\'s instructions in certain cases, such as bills requiring Presidential assent.'
          },
          {
            id: 'ord-q4',
            question: 'Which amendment allowed judicial review of the President\'s satisfaction in issuing ordinances?',
            options: ['42nd Amendment', '44th Amendment', '86th Amendment', '97th Amendment'],
            correct: 1,
            explanation: 'The 44th Amendment allows the President\'s satisfaction in issuing ordinances to be questioned in court.'
          },
        ]
      },
      {
        id: 'discretionary-powers',
        name: 'Discretionary Powers (UPSC 2025)',
        flashcards: [
          {
            id: 'dsc-1',
            front: 'Does the President have constitutional discretion?',
            back: 'No. The President has no constitutional discretion.\nBut some situational discretions include:\n- Appointment of PM when no clear majority exists\n- Dismissal of CoM if they lose Lok Sabha\'s confidence\n- Dissolution of Lok Sabha when CoM loses majority'
          },
          {
            id: 'dsc-2',
            front: 'What are the Governor\'s Constitutional Discretionary Powers?',
            back: '- Reservation of bills for the President\n- Recommendations for President\'s Rule\n- Seeking information from the CM\n- Administration of adjoining Union Territories (UPSC 2014)'
          },
          {
            id: 'dsc-3',
            front: 'What are the Governor\'s Situational Discretionary Powers?',
            back: '- Appointment of CM when no party has a clear majority or after death of sitting CM\n- Dismissal of CoM when they lose majority\n- Dissolution of the Assembly if CoM loses majority'
          },
          {
            id: 'dsc-4',
            front: 'What does Article 163 state about Governor\'s discretion? (UPSC 2025)',
            back: 'Article 163 explicitly mentions that in certain spheres the Governor acts in his/her own discretion. If any question arises whether a matter requires the Governor to act in discretion, the Governor\'s decision shall be final, and the validity of any action taken cannot be challenged on grounds of whether he should or shouldn\'t have exercised that discretion.'
          },
          {
            id: 'dsc-5',
            front: 'What does Article 200 say about reserving bills? (UPSC 2025)',
            back: 'Article 200 allows the Governor, not the President, to reserve State bills for the President\'s consideration. The President can act only on bills forwarded by the Governor, not on his own.'
          },
        ],
        quiz: [
          {
            id: 'dsc-q1',
            question: 'The President has:',
            options: [
              'Constitutional discretion in all matters',
              'No constitutional discretion, but situational discretions',
              'Absolute discretion',
              'No discretion at all'
            ],
            correct: 1,
            explanation: 'The President has no constitutional discretion but has situational discretions like appointment of PM when no clear majority exists.'
          },
          {
            id: 'dsc-q2',
            question: 'Administration of adjoining Union Territories is a discretionary power of: (UPSC 2014)',
            options: ['President', 'Prime Minister', 'Governor', 'Chief Minister'],
            correct: 2,
            explanation: 'Administration of adjoining Union Territories is a constitutional discretionary power of the Governor.'
          },
          {
            id: 'dsc-q3',
            question: 'Article 163 states that the Governor\'s decision on discretionary matters is: (UPSC 2025)',
            options: [
              'Subject to judicial review',
              'Final and cannot be challenged',
              'Subject to President\'s approval',
              'Subject to CM\'s approval'
            ],
            correct: 1,
            explanation: 'Under Article 163, the Governor\'s decision on discretionary matters is final and the validity cannot be challenged.'
          },
          {
            id: 'dsc-q4',
            question: 'Under Article 200, who reserves State bills for the President? (UPSC 2025)',
            options: ['President himself', 'Chief Minister', 'Governor', 'Speaker of State Assembly'],
            correct: 2,
            explanation: 'Article 200 allows the Governor to reserve State bills for the President\'s consideration. The President acts only on bills forwarded by the Governor.'
          },
          {
            id: 'dsc-q5',
            question: 'Which of the following is a situational discretion of the President?',
            options: [
              'Reservation of bills',
              'Administration of UTs',
              'Appointment of PM when no clear majority exists',
              'Seeking information from PM'
            ],
            correct: 2,
            explanation: 'Appointment of PM when no clear majority exists is a situational discretion of the President.'
          },
        ]
      }
    ]
  },
  {
    id: 'the-executive',
    name: 'The Executive in India',
    icon: '👔',
    subtopics: [
      {
        id: 'pm-and-cm-constitutional-provisions',
        name: 'Constitutional Provisions: PM & CM',
        flashcards: [
          {
            id: 'pmcm-1',
            front: 'What does Article 74 provide about the PM and Council of Ministers?',
            back: 'PM heads the Council of Ministers (CoM) to aid and advise the President. The President may ask for reconsideration but must follow the final advice.'
          },
          {
            id: 'pmcm-2',
            front: 'What does Article 75 provide?',
            back: '- PM is appointed by the President; other ministers appointed on PM\'s advice\n- Ministers hold office at the pleasure of the President\n- CoM is collectively responsible to the Lok Sabha'
          },
          {
            id: 'pmcm-3',
            front: 'What are the PM\'s duties under Article 78?',
            back: '- Communicating CoM decisions and legislative proposals to the President\n- Submitting matters for CoM consideration upon the President\'s request\nOthers: Advises President on appointments of key officials (Attorney General, CAG, UPSC, Election Commissioners, etc.)'
          },
          {
            id: 'pmcm-4',
            front: 'What does Article 163 provide about the CM and Governor?',
            back: 'CM heads the CoM to aid and advise the Governor, who may act at discretion in some cases.'
          },
          {
            id: 'pmcm-5',
            front: 'What does Article 164 provide?',
            back: '- CM is appointed by the Governor; other ministers on CM\'s advice\n- Ministers hold office at the pleasure of the Governor\n- CoM is collectively responsible to the state legislative assembly'
          },
          {
            id: 'pmcm-6',
            front: 'What are the CM\'s duties under Article 167?',
            back: '- Communicating CoM decisions and legislative proposals to the Governor\n- Submitting matters for CoM reconsideration upon Governor\'s request'
          },
          {
            id: 'pmcm-7',
            front: 'Who determines the salary of the PM and CM?',
            back: 'PM\'s salary: Determined by Parliament\nCM\'s salary: Determined by the State Legislature'
          },
          {
            id: 'pmcm-8',
            front: 'Compare: PM\'s relation with President vs CM\'s relation with Governor',
            back: 'PM (Art 74, 75, 78):\n- President MUST follow CoM advice (after reconsideration)\n- CoM responsible to Lok Sabha\n- Advises on key appointments\n\nCM (Art 163, 164, 167):\n- Governor MAY act at discretion in some cases\n- CoM responsible to state legislative assembly\n- No advisory role on central appointments'
          },
        ],
        quiz: [
          {
            id: 'pmcm-q1',
            question: 'Under Article 74, the President must:',
            options: [
              'Follow CoM advice without question',
              'May ask for reconsideration but must follow final advice',
              'Can reject CoM advice at any time',
              'Follow only PM\'s personal advice'
            ],
            correct: 1,
            explanation: 'Article 74: The President may ask for reconsideration but must follow the final advice of the CoM.'
          },
          {
            id: 'pmcm-q2',
            question: 'The CoM is collectively responsible to:',
            options: [
              'The President',
              'The Lok Sabha',
              'The Rajya Sabha',
              'Both Houses of Parliament'
            ],
            correct: 1,
            explanation: 'Under Article 75, the Council of Ministers is collectively responsible to the Lok Sabha.'
          },
          {
            id: 'pmcm-q3',
            question: 'The CM is appointed by:',
            options: ['President', 'Governor', 'State Legislature', 'Chief Justice of HC'],
            correct: 1,
            explanation: 'Under Article 164, the CM is appointed by the Governor.'
          },
          {
            id: 'pmcm-q4',
            question: 'Article 78 deals with the duties of:',
            options: ['President', 'Vice President', 'Prime Minister', 'Speaker'],
            correct: 2,
            explanation: 'Article 78 deals with the PM\'s duties — communicating CoM decisions to President and submitting matters for CoM consideration.'
          },
          {
            id: 'pmcm-q5',
            question: 'PM\'s salary is determined by:',
            options: ['President', 'Parliament', 'Finance Commission', 'Cabinet'],
            correct: 1,
            explanation: 'The PM\'s salary is determined by Parliament. The CM\'s salary is determined by the State Legislature.'
          },
          {
            id: 'pmcm-q6',
            question: 'Under Article 163, the Governor may act at discretion:',
            options: [
              'Never',
              'Always',
              'In some cases',
              'Only during President\'s Rule'
            ],
            correct: 2,
            explanation: 'Article 163: CM heads the CoM to aid and advise the Governor, who may act at discretion in some cases.'
          },
          {
            id: 'pmcm-q7',
            question: 'The CM\'s duties under Article 167 include:',
            options: [
              'Appointing state judges',
              'Communicating CoM decisions to Governor and submitting matters for reconsideration',
              'Dissolving the state assembly',
              'Advising on central appointments'
            ],
            correct: 1,
            explanation: 'Article 167: CM communicates CoM decisions and legislative proposals to the Governor and submits matters for reconsideration upon request.'
          },
          {
            id: 'pmcm-q8',
            question: 'Ministers hold office at the pleasure of:',
            options: [
              'Parliament and State Legislature respectively',
              'President and Governor respectively',
              'PM and CM respectively',
              'Speaker and Governor respectively'
            ],
            correct: 1,
            explanation: 'Under Art 75 and 164, ministers hold office at the pleasure of the President (Centre) and Governor (State) respectively.'
          },
        ]
      },
      {
        id: 'facts-about-indian-pms',
        name: 'Facts About Indian Prime Ministers',
        flashcards: [
          {
            id: 'fpm-1',
            front: 'Who was the longest-serving Indian Prime Minister?',
            back: 'Jawaharlal Nehru (1947–1964).'
          },
          {
            id: 'fpm-2',
            front: 'Who was the second longest-serving Indian PM?',
            back: 'Indira Gandhi.'
          },
          {
            id: 'fpm-3',
            front: 'Who was the first non-Congress PM of India?',
            back: 'Morarji Desai.'
          },
          {
            id: 'fpm-4',
            front: 'Which Indian PM was awarded Pakistan\'s highest civilian award?',
            back: 'Morarji Desai — first Indian PM to receive Pakistan\'s highest civilian award.'
          },
          {
            id: 'fpm-5',
            front: 'Who was the youngest Indian PM?',
            back: 'Rajiv Gandhi.'
          },
          {
            id: 'fpm-6',
            front: 'Who was the first PM from South India?',
            back: 'P.V. Narasimha Rao.'
          },
          {
            id: 'fpm-7',
            front: 'Who was the first PM who was a member of the Rajya Sabha?',
            back: 'Indira Gandhi.'
          },
          {
            id: 'fpm-8',
            front: 'Who served as Acting Prime Minister twice?',
            back: 'Gulzari Lal Nanda.'
          },
        ],
        quiz: [
          {
            id: 'fpm-q1',
            question: 'The longest-serving Indian PM was:',
            options: ['Indira Gandhi', 'Jawaharlal Nehru', 'Narendra Modi', 'Rajiv Gandhi'],
            correct: 1,
            explanation: 'Jawaharlal Nehru served from 1947 to 1964, making him the longest-serving PM.'
          },
          {
            id: 'fpm-q2',
            question: 'The first non-Congress PM of India was:',
            options: ['Atal Bihari Vajpayee', 'V.P. Singh', 'Morarji Desai', 'Charan Singh'],
            correct: 2,
            explanation: 'Morarji Desai was the first non-Congress PM of India.'
          },
          {
            id: 'fpm-q3',
            question: 'Which PM received Pakistan\'s highest civilian award?',
            options: ['Jawaharlal Nehru', 'Rajiv Gandhi', 'Morarji Desai', 'Atal Bihari Vajpayee'],
            correct: 2,
            explanation: 'Morarji Desai was the first Indian PM awarded Pakistan\'s highest civilian award.'
          },
          {
            id: 'fpm-q4',
            question: 'The youngest Indian PM was:',
            options: ['Jawaharlal Nehru', 'Indira Gandhi', 'Rajiv Gandhi', 'P.V. Narasimha Rao'],
            correct: 2,
            explanation: 'Rajiv Gandhi was the youngest Indian Prime Minister.'
          },
          {
            id: 'fpm-q5',
            question: 'The first PM from South India was:',
            options: ['H.D. Deve Gowda', 'P.V. Narasimha Rao', 'I.K. Gujral', 'Charan Singh'],
            correct: 1,
            explanation: 'P.V. Narasimha Rao was the first PM from South India.'
          },
          {
            id: 'fpm-q6',
            question: 'Gulzari Lal Nanda is known for:',
            options: [
              'Being the youngest PM',
              'Serving as Acting PM twice',
              'Being the first non-Congress PM',
              'Being the longest-serving PM'
            ],
            correct: 1,
            explanation: 'Gulzari Lal Nanda served as Acting Prime Minister twice.'
          },
          {
            id: 'fpm-q7',
            question: 'The first PM who was a member of the Rajya Sabha was:',
            options: ['Manmohan Singh', 'Indira Gandhi', 'Rajiv Gandhi', 'H.D. Deve Gowda'],
            correct: 1,
            explanation: 'Indira Gandhi was the first PM who was a member of the Rajya Sabha.'
          },
        ]
      },
      {
        id: 'cabinet-secretariat',
        name: 'Cabinet Secretariat',
        flashcards: [
          {
            id: 'csec-1',
            front: 'What is the Cabinet Secretariat and who heads it? (UPSC 2015)',
            back: 'The Cabinet Secretariat functions directly under the Prime Minister. The administrative head is the Cabinet Secretary who is also the ex-officio Chairman of the Civil Services Board.'
          },
          {
            id: 'csec-2',
            front: 'What business is allocated to the Cabinet Secretariat? (UPSC 2014)',
            back: 'Under the Government of India (Allocation of Business) Rules, 1961:\n(i) Secretarial assistance to the Cabinet and Cabinet Committees\n(ii) Rules of Business, preparation of agenda for Cabinet Meetings, and secretariat assistance to Cabinet Committees'
          },
          {
            id: 'csec-3',
            front: 'What did the Report on Reorganisation of the Machinery of Central Government (1950) recommend? (UPSC 2021)',
            back: 'N. Gopalaswamy Ayyangar recommended grouping ministries and enhancing personnel capabilities in the O&M Division but did NOT propose a minister or secretary for administrative reform.'
          },
          {
            id: 'csec-4',
            front: 'What did the 1st ARC recommend? (UPSC 2021)',
            back: 'The 1st Administrative Reforms Commission (ARC) recommended designating a minister and secretary specifically for promoting administrative reform.'
          },
          {
            id: 'csec-5',
            front: 'When was the Department of Personnel established? (UPSC 2021)',
            back: 'In 1970, the Department of Personnel was established based on ARC recommendations under the Cabinet Secretariat. In 1985, it came under the Prime Minister\'s charge, assisted by a Minister of State.'
          },
        ],
        quiz: [
          {
            id: 'csec-q1',
            question: 'The Cabinet Secretary is the ex-officio Chairman of: (UPSC 2015)',
            options: ['UPSC', 'Finance Commission', 'Civil Services Board', 'Planning Commission'],
            correct: 2,
            explanation: 'The Cabinet Secretary is the ex-officio Chairman of the Civil Services Board.'
          },
          {
            id: 'csec-q2',
            question: 'The Cabinet Secretariat functions directly under: (UPSC 2015)',
            options: ['President', 'Prime Minister', 'Home Minister', 'Finance Minister'],
            correct: 1,
            explanation: 'The Cabinet Secretariat functions directly under the Prime Minister.'
          },
          {
            id: 'csec-q3',
            question: 'N. Gopalaswamy Ayyangar\'s 1950 report recommended: (UPSC 2021)',
            options: [
              'A minister for administrative reform',
              'Grouping ministries and enhancing O&M Division capabilities',
              'Abolishing the Cabinet Secretariat',
              'Creating the Department of Personnel'
            ],
            correct: 1,
            explanation: 'The report recommended grouping ministries and enhancing personnel capabilities in the O&M Division, but did NOT propose a minister or secretary for administrative reform.'
          },
          {
            id: 'csec-q4',
            question: 'The Department of Personnel was established in: (UPSC 2021)',
            options: ['1950', '1964', '1970', '1985'],
            correct: 2,
            explanation: 'The Department of Personnel was established in 1970 based on ARC recommendations under the Cabinet Secretariat. In 1985, it came under PM\'s charge.'
          },
          {
            id: 'csec-q5',
            question: 'The 1st ARC recommended: (UPSC 2021)',
            options: [
              'Abolishing Cabinet Committees',
              'Designating a minister and secretary for promoting administrative reform',
              'Merging the Cabinet Secretariat with PMO',
              'Creating NITI Aayog'
            ],
            correct: 1,
            explanation: 'The 1st ARC recommended designating a minister and secretary specifically for promoting administrative reform.'
          },
        ]
      }
    ]
  },
  {
    id: 'parliament',
    name: 'Parliament (Part-V: Articles 79-122)',
    icon: '🏫',
    subtopics: [
      {
        id: 'rs-ls-composition-and-representation',
        name: 'Composition, Representation & Emergency Extension',
        flashcards: [
          {
            id: 'parl-1',
            front: 'How are UT members represented in the Rajya Sabha?',
            back: 'Indirectly elected by members of a specially constituted electoral college.'
          },
          {
            id: 'parl-2',
            front: 'How are UT members represented in the Lok Sabha? (UPSC 2012)',
            back: 'Directly elected as per the Union Territories (Direct Election to the House of the People) Act, 1965.'
          },
          {
            id: 'parl-3',
            front: 'Can the Lok Sabha\'s term be extended during an emergency?',
            back: 'Yes. Can extend for one year during a National Emergency (Article 352), but cannot exceed six months after the emergency ends.'
          },
          {
            id: 'parl-4',
            front: 'Can the Rajya Sabha\'s term be extended during an emergency?',
            back: 'N/A — Rajya Sabha is a permanent body and is not subject to dissolution. 1/3 of members retire every 2 years.'
          },
          {
            id: 'parl-5',
            front: 'How many members can the President nominate to the Rajya Sabha?',
            back: '12 members nominated by the President, having special knowledge or experience in literature, science, art, and social service (Article 80(3)). There are no nominations to the Lok Sabha (Anglo-Indian nomination ended in 2020).'
          },
        ],
        quiz: [
          {
            id: 'parl-q1',
            question: 'UT members in the Lok Sabha are: (UPSC 2012)',
            options: [
              'Nominated by the President',
              'Indirectly elected by electoral college',
              'Directly elected as per UT Direct Election Act, 1965',
              'Appointed by the Governor'
            ],
            correct: 2,
            explanation: 'UT members in Lok Sabha are directly elected as per the Union Territories (Direct Election to the House of the People) Act, 1965.'
          },
          {
            id: 'parl-q2',
            question: 'During a National Emergency, Lok Sabha\'s term can be extended by:',
            options: ['6 months at a time', '1 year at a time', '2 years at a time', 'Unlimited duration'],
            correct: 1,
            explanation: 'Lok Sabha\'s term can extend for one year at a time during National Emergency (Art 352), but not more than 6 months after the emergency ends.'
          },
          {
            id: 'parl-q3',
            question: 'The President nominates members to Rajya Sabha under:',
            options: ['Article 80(1)', 'Article 80(3)', 'Article 81', 'Article 85'],
            correct: 1,
            explanation: 'Article 80(3) provides for nomination of 12 members with special knowledge in literature, science, art, and social service.'
          },
          {
            id: 'parl-q4',
            question: 'UT members in the Rajya Sabha are:',
            options: [
              'Directly elected',
              'Nominated by the President',
              'Indirectly elected by a specially constituted electoral college',
              'Appointed by the UT administrator'
            ],
            correct: 2,
            explanation: 'UT members in Rajya Sabha are indirectly elected by members of a specially constituted electoral college.'
          },
        ]
      },
      {
        id: 'qualifications-and-disqualifications',
        name: 'Qualifications & Disqualifications of MPs',
        flashcards: [
          {
            id: 'qd-1',
            front: 'What are the Constitutional qualifications for Rajya Sabha membership?',
            back: '- Citizenship of India\n- Oath or affirmation (Schedule 3)\n- Age: 30 years\n- Other qualifications as prescribed by Parliament'
          },
          {
            id: 'qd-2',
            front: 'What are the Constitutional qualifications for Lok Sabha membership? (UPSC 2017)',
            back: '- Citizenship of India\n- Oath or affirmation (Schedule 3)\n- Age: 25 years (LS)\n- Other qualifications as prescribed by Parliament'
          },
          {
            id: 'qd-3',
            front: 'What are the RPA 1951 qualifications for RS and LS? (UPSC 2018)',
            back: 'RS: Must be registered as an elector for a Parliamentary constituency; must be a member of SC/ST community for reserved seats. (UPSC 2018)\nLS: Must be registered as an elector for a Parliamentary constituency; must be a member of SC/ST community for reserved seats. (UPSC 2017)'
          },
          {
            id: 'qd-4',
            front: 'What are the Constitutional grounds for disqualification of MPs?',
            back: '- Holds office of profit\n- Not a citizen of India\n- Unsound mind (court-declared)\n- Undischarged insolvent\n- Acquired foreign citizenship\n(Same for both RS and LS)'
          },
          {
            id: 'qd-5',
            front: 'What are the RPA 1951 grounds for disqualification? (UPSC 2020)',
            back: 'Common to both RS & LS:\n- Guilty of election offences\n- Failed to lodge election expenses\n- Interest in government contracts\n- Managing agent/manager/secretary in a corporation with 25% government share (Sec.10 RPA 1951)\n\nAdditional for LS:\n- Convicted for promoting enmity\n- Punished for social crimes\n- Dismissed for corruption'
          },
          {
            id: 'qd-6',
            front: 'How is disqualification on grounds of defection decided?',
            back: 'RS: Decided by the Chairman; judicially reviewable (Kihoto Hollohan Judgement 1992)\nLS: Decided by the Speaker; judicially reviewable (Kihoto Hollohan Judgement 1992)\nGrounds: Voluntarily leaving the party, voting contrary to party direction, etc.'
          },
          {
            id: 'qd-7',
            front: 'What are the rules for vacating of seats?',
            back: 'RS: No double membership in both Houses. Must inform within 10 days if elected to both. Members elected to another House vacate their first House seat.\n\nLS: No double membership with state legislature; if not resigning within 14 days, Parliament seat becomes vacant. Seat vacated if subject to disqualification or if election declared void.'
          },
        ],
        quiz: [
          {
            id: 'qd-q1',
            question: 'Minimum age for Rajya Sabha membership is:',
            options: ['25 years', '30 years', '35 years', '21 years'],
            correct: 1,
            explanation: 'Minimum age for RS is 30 years. For LS it is 25 years.'
          },
          {
            id: 'qd-q2',
            question: 'Minimum age for Lok Sabha membership is: (UPSC 2017)',
            options: ['21 years', '25 years', '30 years', '35 years'],
            correct: 1,
            explanation: 'Minimum age for Lok Sabha is 25 years.'
          },
          {
            id: 'qd-q3',
            question: 'Under RPA 1951, Sec.10 disqualifies a person who is a managing agent of a corporation with government share of: (UPSC 2020)',
            options: ['10%', '15%', '20%', '25%'],
            correct: 3,
            explanation: 'Sec.10 of RPA 1951 disqualifies managing agent, manager, or secretary in a corporation with 25% government share.'
          },
          {
            id: 'qd-q4',
            question: 'Disqualification on grounds of defection is decided by:',
            options: [
              'Supreme Court',
              'Election Commission',
              'Chairman (RS) / Speaker (LS)',
              'President'
            ],
            correct: 2,
            explanation: 'Defection disqualification is decided by Chairman (RS) or Speaker (LS), and is judicially reviewable per Kihoto Hollohan Judgement 1992.'
          },
          {
            id: 'qd-q5',
            question: 'If elected to both Houses, a member must inform within:',
            options: ['7 days', '10 days', '14 days', '30 days'],
            correct: 1,
            explanation: 'Must inform within 10 days if elected to both Houses of Parliament.'
          },
          {
            id: 'qd-q6',
            question: 'Which of the following is NOT a constitutional ground for disqualification?',
            options: [
              'Office of profit',
              'Unsound mind',
              'Failed to lodge election expenses',
              'Acquired foreign citizenship'
            ],
            correct: 2,
            explanation: 'Failed to lodge election expenses is a ground under RPA 1951, not under the Constitution.'
          },
        ]
      },
      {
        id: 'salaries-and-allowances',
        name: 'Salaries and Allowances of MPs',
        flashcards: [
          {
            id: 'sal-1',
            front: 'Who determines the salaries and allowances of MPs?',
            back: 'Determined by Parliament for both RS and LS members. No pension provision in the Constitution; pensions were provided in 1976.'
          },
        ],
        quiz: [
          {
            id: 'sal-q1',
            question: 'Pensions for MPs were provided in:',
            options: ['1950', '1965', '1976', '1991'],
            correct: 2,
            explanation: 'Pensions for MPs were provided in 1976. There is no pension provision in the Constitution — it was determined by Parliament.'
          },
        ]
      },
      {
        id: 'system-of-elections-to-lok-sabha',
        name: 'System of Elections to Lok Sabha',
        flashcards: [
          {
            id: 'sels-1',
            front: 'How are Lok Sabha constituencies divided?',
            back: 'Each state is divided into territorial constituencies ensuring uniformity at two levels:\n1. The ratio between number of seats and population is the same for all states\n2. Intra-State: Equal representation among constituencies within the same state'
          },
          {
            id: 'sels-2',
            front: 'How does reservation work for SC/ST in Lok Sabha?',
            back: '- SC and ST are allocated reserved seats based on population ratios\n- All voters in a constituency elect reserved seats (no separate electorate)\n- Members of SC and ST can also contest general (non-reserved) seats'
          },
          {
            id: 'sels-3',
            front: 'How was Lok Sabha seat allocation frozen?',
            back: '42nd Amendment Act, 1976: Froze Lok Sabha seat allocation and territorial constituency division until 2000 at 1971 census levels.\n84th Amendment Act, 2001: Extended this freeze for another 25 years (up to 2026) to promote population control measures.'
          },
          {
            id: 'sels-4',
            front: 'When was the voting age reduced and by which amendment?',
            back: '61st Constitutional Amendment Act, 1988: Reduced the voting age from 21 to 18 years.'
          },
          {
            id: 'sels-5',
            front: 'What did the 104th CAA, 2019 do?',
            back: '- Extends reservation for SC and ST in Lok Sabha and legislative bodies until January 25, 2030 (Articles 330 and 332)\n- Discontinues the nomination of Anglo-Indians (Article 331) to Lok Sabha (2 members) and legislative bodies (1 member)'
          },
          {
            id: 'sels-6',
            front: 'What is the "election process doctrine" from N.P. Ponnuswami v. Returning Officer (1952)?',
            back: 'Once elections begin, courts cannot intervene. Challenges must wait for election petitions, insulating the democratic process from judicial disruption. The SC sealed this doctrine in this landmark case.'
          },
        ],
        quiz: [
          {
            id: 'sels-q1',
            question: 'Lok Sabha seat allocation was frozen at 1971 census levels by:',
            options: ['42nd Amendment, 1976', '44th Amendment, 1978', '61st Amendment, 1988', '84th Amendment, 2001'],
            correct: 0,
            explanation: 'The 42nd Amendment (1976) froze Lok Sabha seat allocation at 1971 levels. The 84th Amendment (2001) extended this freeze up to 2026.'
          },
          {
            id: 'sels-q2',
            question: 'The freeze on Lok Sabha seat allocation is extended up to:',
            options: ['2020', '2026', '2030', '2031'],
            correct: 1,
            explanation: 'The 84th Amendment (2001) extended the freeze on seat allocation up to 2026.'
          },
          {
            id: 'sels-q3',
            question: 'The 104th CAA, 2019 extends SC/ST reservation in Lok Sabha until:',
            options: ['January 25, 2025', 'January 25, 2030', 'January 26, 2035', 'January 26, 2040'],
            correct: 1,
            explanation: 'The 104th CAA extends SC/ST reservation until January 25, 2030 under Articles 330 and 332.'
          },
          {
            id: 'sels-q4',
            question: 'Anglo-Indian nomination to Lok Sabha was discontinued by:',
            options: ['86th Amendment, 2002', '97th Amendment, 2011', '101st Amendment, 2017', '104th Amendment, 2019'],
            correct: 3,
            explanation: 'The 104th CAA, 2019 discontinued the nomination of Anglo-Indians (Article 331) to Lok Sabha and state legislative bodies.'
          },
          {
            id: 'sels-q5',
            question: 'In reserved SC/ST constituencies, who can vote?',
            options: [
              'Only SC/ST voters',
              'All voters in the constituency',
              'Only registered SC/ST members',
              'Only members of the reserved category'
            ],
            correct: 1,
            explanation: 'All voters in the constituency elect reserved seat candidates — there is no separate electorate. SC/ST members can also contest general seats.'
          },
          {
            id: 'sels-q6',
            question: 'The "election process doctrine" was established in:',
            options: [
              'Kesavananda Bharati (1973)',
              'N.P. Ponnuswami v. Returning Officer (1952)',
              'Minerva Mills (1980)',
              'I.R. Coelho (2007)'
            ],
            correct: 1,
            explanation: 'In N.P. Ponnuswami v. Returning Officer (1952), the SC held that once elections begin, courts cannot intervene — challenges must wait for election petitions.'
          },
          {
            id: 'sels-q7',
            question: 'The voting age was reduced from 21 to 18 by:',
            options: ['42nd Amendment, 1976', '52nd Amendment, 1985', '61st Amendment, 1988', '73rd Amendment, 1992'],
            correct: 2,
            explanation: 'The 61st Constitutional Amendment Act, 1988 reduced the voting age from 21 to 18 years.'
          },
        ]
      },
      {
        id: 'speaker-pro-tem-and-chairman',
        name: 'Speaker Pro-Tem, Powers & RS Chairman',
        flashcards: [
          {
            id: 'spt-1',
            front: 'What are the Powers and Duties of the Speaker?',
            back: '- Derives powers from the Constitution, Rules of Procedure, and Parliamentary Conventions\n- Guardian of House privileges\n- Maintains order and decorum\n- Final interpreter of provisions of the Constitution and Rules\n- Adjourns the House or suspends meetings for lack of quorum (1/10th of total strength)\n- Decides if a bill is a money bill (decision is final)\n- Presides over joint sittings (Art. 108)\n- Allows secret sittings at the request of Leader of the House\n- Decides disqualifications arising from defection (subject to judicial review) (UPSC 2025)\n- Appoints chairpersons of parliamentary committees and supervises their functions\n- Ex-officio chairman of various committees'
          },
          {
            id: 'spt-2',
            front: 'What are the exclusive powers of the Rajya Sabha Chairman?',
            back: 'Similar powers to the Speaker, EXCEPT:\n- Cannot decide if a bill is a money bill (that power lies with the Speaker)\n- Does not preside over joint sittings of Parliament (that is the Speaker\'s role)\n- Acts as a link between the Rajya Sabha and the President of India'
          },
          {
            id: 'spt-3',
            front: 'How is the Speaker\'s independence and impartiality ensured?',
            back: '- Security of tenure\n- Salaries and allowances fixed by Parliament, charged on the Consolidated Fund of India\n- Work cannot be discussed or criticised in Lok Sabha except on a substantive motion\n- Powers of regulating procedure and maintaining order are not subject to court jurisdiction\n- Can only exercise a casting vote'
          },
          {
            id: 'spt-4',
            front: 'What is a casting vote?',
            back: 'A casting vote is an extra vote exercised by the presiding officer to break a tie when votes for and against a motion are equal. The Speaker can ONLY exercise a casting vote (does not vote in first instance).'
          },
          {
            id: 'spt-5',
            front: 'How is the RS Chairman\'s independence ensured?',
            back: '- Salary and allowances fixed by Parliament, charged on the Consolidated Fund of India\n- Cannot preside over Rajya Sabha when a removal resolution is under consideration; acts as a normal member without voting rights\n- Must ensure the smooth functioning of the Rajya Sabha'
          },
          {
            id: 'spt-6',
            front: 'What is the quorum for a House sitting?',
            back: 'One-tenth (1/10th) of the total strength of the House. The Speaker/Chairman adjourns or suspends meetings for lack of quorum.'
          },
        ],
        quiz: [
          {
            id: 'spt-q1',
            question: 'Who decides if a bill is a money bill (decision is final)?',
            options: ['President', 'Prime Minister', 'Speaker of Lok Sabha', 'Chairman of Rajya Sabha'],
            correct: 2,
            explanation: 'The Speaker of Lok Sabha decides if a bill is a money bill, and the decision is final.'
          },
          {
            id: 'spt-q2',
            question: 'Who presides over joint sittings of Parliament (Art. 108)?',
            options: ['President', 'Vice President', 'Speaker of Lok Sabha', 'Senior-most MP'],
            correct: 2,
            explanation: 'The Speaker presides over joint sittings under Article 108. The RS Chairman does NOT preside over joint sittings.'
          },
          {
            id: 'spt-q3',
            question: 'The Speaker decides defection disqualifications, which are: (UPSC 2025)',
            options: [
              'Final and not reviewable',
              'Subject to judicial review',
              'Subject to President\'s approval',
              'Decided by Election Commission'
            ],
            correct: 1,
            explanation: 'The Speaker decides disqualifications arising from defection, subject to judicial review (Kihoto Hollohan 1992).'
          },
          {
            id: 'spt-q4',
            question: 'The quorum for a House sitting is:',
            options: ['1/4th of total strength', '1/3rd of total strength', '1/10th of total strength', 'Majority of total strength'],
            correct: 2,
            explanation: 'Quorum is 1/10th of the total strength of the House.'
          },
          {
            id: 'spt-q5',
            question: 'A casting vote is exercised by the Speaker when:',
            options: [
              'The Speaker wants to support a bill',
              'Votes for and against a motion are equal',
              'The opposition demands it',
              'The PM requests it'
            ],
            correct: 1,
            explanation: 'A casting vote is exercised to break a tie when votes for and against are equal. The Speaker does not vote in the first instance.'
          },
          {
            id: 'spt-q6',
            question: 'The RS Chairman CANNOT:',
            options: [
              'Maintain order in the House',
              'Decide if a bill is a money bill',
              'Adjourn the House for lack of quorum',
              'Allow discussions in the House'
            ],
            correct: 1,
            explanation: 'The RS Chairman cannot decide if a bill is a money bill — that power lies exclusively with the Speaker of Lok Sabha.'
          },
          {
            id: 'spt-q7',
            question: 'Speaker\'s salary is charged on:',
            options: [
              'Contingency Fund of India',
              'Consolidated Fund of India',
              'Public Account of India',
              'State Consolidated Fund'
            ],
            correct: 1,
            explanation: 'Speaker\'s salary and allowances are charged on the Consolidated Fund of India, ensuring independence from executive control.'
          },
        ]
      },
      {
        id: 'dissolution-and-lapsing-of-bills',
        name: 'Dissolution & Lapsing of Bills',
        flashcards: [
          {
            id: 'dlb-1',
            front: 'Can the Rajya Sabha be dissolved?',
            back: 'No. Only the Lok Sabha can be dissolved, ending its current life irrevocably. The Rajya Sabha is a permanent body.'
          },
          {
            id: 'dlb-2',
            front: 'When may dissolution of Lok Sabha occur?',
            back: '1. Automatically at the end of its tenure (5 years)\n2. By the President\'s decision (on advice of PM/CoM)'
          },
          {
            id: 'dlb-3',
            front: 'What happens to pending business upon dissolution? (UPSC 2024)',
            back: 'All pending business lapses upon dissolution, EXCEPT:\n- Some bills (see lapsing rules)\n- Pending assurances for the Committee on Government Assurances'
          },
          {
            id: 'dlb-4',
            front: 'When does a Bill LAPSE on dissolution of Lok Sabha? (UPSC 2016)',
            back: 'A bill lapses if:\n1. It is pending in Lok Sabha\n2. It is pending in Rajya Sabha but has been passed by Lok Sabha'
          },
          {
            id: 'dlb-5',
            front: 'When does a Bill NOT LAPSE on dissolution of Lok Sabha? (UPSC 2016)',
            back: 'A bill does NOT lapse if:\n1. Passed by both Houses but returned by the President for reconsideration\n2. Pending in Rajya Sabha and NOT passed by Lok Sabha\n3. A joint sitting is notified before Lok Sabha dissolution\n4. Passed by both Houses but awaiting the President\'s assent'
          },
        ],
        quiz: [
          {
            id: 'dlb-q1',
            question: 'Which House can be dissolved? (UPSC 2024)',
            options: ['Rajya Sabha only', 'Lok Sabha only', 'Both Houses', 'Neither House'],
            correct: 1,
            explanation: 'Only the Lok Sabha can be dissolved. Rajya Sabha is a permanent body and cannot be dissolved.'
          },
          {
            id: 'dlb-q2',
            question: 'A bill pending in Rajya Sabha but passed by Lok Sabha will: (UPSC 2016)',
            options: [
              'Not lapse on dissolution',
              'Lapse on dissolution of Lok Sabha',
              'Be referred to President',
              'Continue in Rajya Sabha'
            ],
            correct: 1,
            explanation: 'A bill pending in RS but passed by LS lapses on dissolution of Lok Sabha.'
          },
          {
            id: 'dlb-q3',
            question: 'A bill passed by both Houses but awaiting President\'s assent will: (UPSC 2016)',
            options: [
              'Lapse on dissolution',
              'Not lapse on dissolution',
              'Be sent back to Lok Sabha',
              'Automatically become law'
            ],
            correct: 1,
            explanation: 'A bill passed by both Houses but awaiting President\'s assent does NOT lapse on dissolution.'
          },
          {
            id: 'dlb-q4',
            question: 'Which of the following does NOT lapse on dissolution?',
            options: [
              'Bill pending in Lok Sabha',
              'Bill pending in RS but passed by LS',
              'Bill pending in RS and not passed by LS',
              'All bills lapse'
            ],
            correct: 2,
            explanation: 'A bill pending in RS and NOT passed by LS does not lapse, since it originated/remains in the permanent House.'
          },
          {
            id: 'dlb-q5',
            question: 'Upon dissolution, pending assurances for which committee do NOT lapse? (UPSC 2024)',
            options: [
              'Public Accounts Committee',
              'Estimates Committee',
              'Committee on Government Assurances',
              'Committee on Subordinate Legislation'
            ],
            correct: 2,
            explanation: 'Pending assurances for the Committee on Government Assurances do not lapse upon dissolution.'
          },
          {
            id: 'dlb-q6',
            question: 'A bill does NOT lapse if a joint sitting is notified:',
            options: [
              'After Lok Sabha dissolution',
              'Before Lok Sabha dissolution',
              'During the Budget session',
              'Only with President\'s approval'
            ],
            correct: 1,
            explanation: 'If a joint sitting is notified before Lok Sabha dissolution, the bill does not lapse.'
          },
        ]
      },
      {
        id: 'financial-bill-i-vs-ii',
        name: 'Financial Bill (I) vs Financial Bill (II)',
        flashcards: [
          {
            id: 'fb-1',
            front: 'What is a Financial Bill (I)? [Article 117(1)]',
            back: '- Bill that not only contains exclusive matters of Article 110 (money bill matters), but also contains other matters of general legislation\n- Can be introduced only in the Lok Sabha\n- Introduced only on the recommendation of the President'
          },
          {
            id: 'fb-2',
            front: 'What is a Financial Bill (II)? [Article 117(3)]',
            back: '- Bill contains provisions involving expenditure from the Consolidated Fund of India, but does NOT include any of the matters mentioned in Article 110\n- Can be introduced in both Houses of Parliament\n- Recommendation of the President is NOT necessary for its introduction but is required at the consideration stage'
          },
          {
            id: 'fb-3',
            front: 'Key differences between Financial Bill (I) and Financial Bill (II)?',
            back: 'Financial Bill (I) [Art 117(1)]:\n- Contains Art 110 matters + other matters\n- Only in Lok Sabha\n- President\'s recommendation needed for introduction\n\nFinancial Bill (II) [Art 117(3)]:\n- Does NOT contain Art 110 matters\n- In either House\n- President\'s recommendation needed only at consideration stage, not introduction'
          },
          {
            id: 'fb-4',
            front: 'What is Article 110?',
            back: 'Article 110 defines a Money Bill — dealing exclusively with taxation, borrowing, Consolidated Fund expenditure/receipts, appropriation, etc. The Speaker certifies whether a bill is a Money Bill.'
          },
        ],
        quiz: [
          {
            id: 'fb-q1',
            question: 'Financial Bill (I) under Article 117(1) can be introduced in:',
            options: ['Both Houses', 'Lok Sabha only', 'Rajya Sabha only', 'Joint sitting only'],
            correct: 1,
            explanation: 'Financial Bill (I) can be introduced only in the Lok Sabha, similar to a Money Bill.'
          },
          {
            id: 'fb-q2',
            question: 'Financial Bill (II) under Article 117(3) requires President\'s recommendation:',
            options: [
              'For introduction only',
              'At the consideration stage only',
              'For both introduction and consideration',
              'Not required at all'
            ],
            correct: 1,
            explanation: 'Financial Bill (II) does NOT need President\'s recommendation for introduction, but it IS required at the consideration stage.'
          },
          {
            id: 'fb-q3',
            question: 'Which Financial Bill contains matters of Article 110 along with other matters?',
            options: ['Financial Bill (I)', 'Financial Bill (II)', 'Both', 'Neither'],
            correct: 0,
            explanation: 'Financial Bill (I) contains exclusive matters of Article 110 plus other matters of general legislation.'
          },
          {
            id: 'fb-q4',
            question: 'Financial Bill (II) can be introduced in:',
            options: ['Lok Sabha only', 'Rajya Sabha only', 'Both Houses of Parliament', 'Only in joint sittings'],
            correct: 2,
            explanation: 'Financial Bill (II) can be introduced in both Houses of Parliament, unlike Financial Bill (I) which is Lok Sabha only.'
          },
          {
            id: 'fb-q5',
            question: 'Financial Bill (I) requires President\'s recommendation for:',
            options: [
              'Consideration stage only',
              'Introduction',
              'Neither introduction nor consideration',
              'Passing only'
            ],
            correct: 1,
            explanation: 'Financial Bill (I) is introduced only on the recommendation of the President.'
          },
        ]
      },
      {
        id: 'joint-sitting-article-108',
        name: 'Joint Sitting (Article 108)',
        flashcards: [
          {
            id: 'js-1',
            front: 'What is a Joint Sitting under Article 108?',
            back: 'A constitutional mechanism to resolve deadlocks between the two Houses of Parliament regarding the passage of a bill.'
          },
          {
            id: 'js-2',
            front: 'What are the conditions for a Joint Sitting?',
            back: 'A deadlock occurs under any of these conditions after a bill has been passed by one House and sent to the other:\n1. The bill is rejected by the other House\n2. The Houses have disagreed on the amendments to be made\n3. More than six months have passed since the bill was received without being passed'
          },
          {
            id: 'js-3',
            front: 'Who summons a Joint Sitting and what majority is needed?',
            back: 'The President summons both Houses to a joint sitting. If a bill is approved by a majority of the total number of members present and voting, it is deemed passed by both Houses.'
          },
          {
            id: 'js-4',
            front: 'Who presides over a Joint Sitting?',
            back: '1. Speaker of the Lok Sabha presides\n2. In Speaker\'s absence → Deputy Speaker\n3. If both absent → Deputy Chairman of the Rajya Sabha\n4. If all absent → a member chosen by those present\n\nNote: The Chairman of Rajya Sabha does NOT preside as he is not a member of either House.'
          },
          {
            id: 'js-5',
            front: 'What is the quorum and procedure for a Joint Sitting?',
            back: 'Quorum: One-tenth (1/10th) of the total members of both Houses.\nGoverned by the Rules of Procedure of the Lok Sabha.'
          },
          {
            id: 'js-6',
            front: 'Can a Joint Sitting be summoned after Lok Sabha dissolution?',
            back: 'A joint sitting CANNOT be summoned if the disputed bill has lapsed due to dissolution of Lok Sabha.\nHOWEVER, if the Lok Sabha is dissolved AFTER the President notifies the intention to summon a sitting, the joint sitting can still occur.'
          },
          {
            id: 'js-7',
            front: 'How many times has the Joint Sitting provision been invoked?',
            back: 'Only thrice:\n1. Dowry Prohibition Bill (1960)\n2. Banking Service Commission (Repeal) Bill (1977)\n3. Prevention of Terrorism Bill (2002)'
          },
          {
            id: 'js-8',
            front: 'To which bills is Joint Sitting applicable? (UPSC 2012)',
            back: 'Applicable to: Ordinary bills and Financial bills\nNOT applicable to: Money bills or Constitutional Amendment bills (Article 108)\nThe bill can be passed by a simple majority of members present and voting. (UPSC 2015)'
          },
          {
            id: 'js-9',
            front: 'What amendments can be proposed at a Joint Sitting?',
            back: 'New amendments can only be proposed in two scenarios:\n1. Those that caused final disagreement between the Houses\n2. Those that have become necessary due to delays in the bill\'s passage'
          },
        ],
        quiz: [
          {
            id: 'js-q1',
            question: 'Joint Sitting is NOT applicable to: (UPSC 2012)',
            options: [
              'Ordinary bills',
              'Financial bills',
              'Money bills and Constitutional Amendment bills',
              'All types of bills'
            ],
            correct: 2,
            explanation: 'Joint Sitting under Article 108 is applicable to ordinary and financial bills, but NOT to money bills or constitutional amendment bills.'
          },
          {
            id: 'js-q2',
            question: 'A bill at a Joint Sitting is passed by: (UPSC 2015)',
            options: [
              'Absolute majority of total membership',
              'Simple majority of members present and voting',
              '2/3 majority of members present and voting',
              'Special majority'
            ],
            correct: 1,
            explanation: 'At a Joint Sitting, the bill is passed by a simple majority of members present and voting.'
          },
          {
            id: 'js-q3',
            question: 'Who presides over a Joint Sitting?',
            options: ['President', 'Vice President', 'Speaker of Lok Sabha', 'Chairman of Rajya Sabha'],
            correct: 2,
            explanation: 'The Speaker of Lok Sabha presides. The RS Chairman does NOT preside as he is not a member of either House.'
          },
          {
            id: 'js-q4',
            question: 'How many times has the Joint Sitting provision been invoked?',
            options: ['Once', 'Twice', 'Thrice', 'Four times'],
            correct: 2,
            explanation: 'Joint Sitting has been invoked thrice: Dowry Prohibition Bill (1960), Banking Service Commission Bill (1977), Prevention of Terrorism Bill (2002).'
          },
          {
            id: 'js-q5',
            question: 'A deadlock for Joint Sitting occurs if the other House does not pass a bill within:',
            options: ['3 months', '6 months', '1 year', '2 years'],
            correct: 1,
            explanation: 'A deadlock occurs if more than 6 months pass since the bill was received by the other House without being passed.'
          },
          {
            id: 'js-q6',
            question: 'The quorum for a Joint Sitting is:',
            options: ['1/4th of total members', '1/3rd of total members', '1/10th of total members of both Houses', 'Majority of total members'],
            correct: 2,
            explanation: 'Quorum for a Joint Sitting is 1/10th of the total members of both Houses, governed by Lok Sabha Rules of Procedure.'
          },
          {
            id: 'js-q7',
            question: 'If the Speaker is absent from a Joint Sitting, who presides next?',
            options: ['Chairman of RS', 'Deputy Speaker of LS', 'Senior-most MP', 'President'],
            correct: 1,
            explanation: 'Order: Speaker → Deputy Speaker → Deputy Chairman of RS → member chosen by those present. The RS Chairman never presides.'
          },
        ]
      },
      {
        id: 'budget-article-112',
        name: 'Budget (Article 112): Grants, Cut Motions & Appropriation',
        flashcards: [
          {
            id: 'bgt-1',
            front: 'How does voting on Demands for Grants work?',
            back: '- Based on reports of departmental standing committees, the Lok Sabha votes on demands for grants (presented ministry-wise)\n- A demand becomes a grant after being duly voted\n- Lok Sabha exclusively votes on demands\n- Expenditure charged on the Consolidated Fund of India is NOT submitted for a vote\n- Each demand is voted on separately'
          },
          {
            id: 'bgt-2',
            front: 'What is a Policy Cut Motion?',
            back: 'Disapproval of the policy underlying the demand — the amount of the demand is reduced to ₹1. It signifies complete disapproval of the policy.'
          },
          {
            id: 'bgt-3',
            front: 'What is an Economy Cut Motion?',
            back: 'Reduction of the demand by a specified amount. It suggests that the expenditure can be reduced by the stated amount.'
          },
          {
            id: 'bgt-4',
            front: 'What is a Token Cut Motion?',
            back: 'Ventilation of a specific grievance — the demand is reduced by ₹100. It allows a member to raise a specific issue of concern.'
          },
          {
            id: 'bgt-5',
            front: 'What are the conditions for admissibility of Cut Motions?',
            back: 'A cut motion must:\n- Pertain to a single demand\n- Be clearly expressed, free from arguments or defamatory statements\n- Focus on one specific matter\n- Not suggest amendments or repeal existing laws\n- Address matters concerning the Union government\n- Not relate to expenditure charged on the Consolidated Fund\n- Not concern matters under court adjudication\n- Not raise a question of privilege'
          },
          {
            id: 'bgt-6',
            front: 'What is the Appropriation Bill and how is it passed?',
            back: '- Constitution mandates no money shall be withdrawn from the Consolidated Fund of India except under appropriation made by law\n- After demands for grants are voted and passed by Lok Sabha, an Appropriation Bill is introduced to authorise withdrawals\n- The Appropriation Bill becomes the Appropriation Act after receiving Presidential assent, allowing payments from the Consolidated Fund'
          },
        ],
        quiz: [
          {
            id: 'bgt-q1',
            question: 'A Policy Cut Motion reduces the demand amount to:',
            options: ['₹0', '₹1', '₹100', 'Half the amount'],
            correct: 1,
            explanation: 'A Policy Cut reduces the demand to ₹1, signifying complete disapproval of the policy underlying the demand.'
          },
          {
            id: 'bgt-q2',
            question: 'A Token Cut Motion reduces the demand by:',
            options: ['₹1', '₹10', '₹100', '₹1000'],
            correct: 2,
            explanation: 'A Token Cut reduces the demand by ₹100 to ventilate a specific grievance.'
          },
          {
            id: 'bgt-q3',
            question: 'Who exclusively votes on Demands for Grants?',
            options: ['Rajya Sabha', 'Lok Sabha', 'Both Houses', 'President'],
            correct: 1,
            explanation: 'The Lok Sabha exclusively votes on demands for grants. This is one of Lok Sabha\'s special powers in financial matters.'
          },
          {
            id: 'bgt-q4',
            question: 'Expenditure charged on the Consolidated Fund of India is:',
            options: [
              'Voted on by Lok Sabha',
              'Voted on by both Houses',
              'Not submitted for a vote',
              'Voted on by Rajya Sabha'
            ],
            correct: 2,
            explanation: 'Expenditure charged on the Consolidated Fund of India is not submitted for a vote — it is non-votable.'
          },
          {
            id: 'bgt-q5',
            question: 'An Economy Cut Motion:',
            options: [
              'Reduces the demand to ₹1',
              'Reduces the demand by ₹100',
              'Reduces the demand by a specified amount',
              'Rejects the entire budget'
            ],
            correct: 2,
            explanation: 'An Economy Cut reduces the demand by a specified amount, suggesting expenditure can be reduced.'
          },
          {
            id: 'bgt-q6',
            question: 'The Appropriation Bill is introduced after:',
            options: [
              'The President\'s address',
              'The general discussion on the budget',
              'The demands for grants are voted on and passed by Lok Sabha',
              'The Rajya Sabha approves the budget'
            ],
            correct: 2,
            explanation: 'After demands for grants are voted and passed by Lok Sabha, the Appropriation Bill is introduced to authorise withdrawals from the Consolidated Fund.'
          },
          {
            id: 'bgt-q7',
            question: 'A cut motion must NOT:',
            options: [
              'Pertain to a single demand',
              'Be clearly expressed',
              'Suggest amendments or repeal existing laws',
              'Focus on one specific matter'
            ],
            correct: 2,
            explanation: 'A cut motion must not suggest amendments or repeal existing laws. It must be focused, clear, and pertain to a single demand.'
          },
        ]
      },
      {
        id: 'types-of-funds',
        name: 'Comparison of Different Types of Funds',
        flashcards: [
          {
            id: 'tof-1',
            front: 'What is the Consolidated Fund of India? (Article 266) (UPSC 2015)',
            back: '- All receipts are credited and all payments are debited\n- All legally authorised payments on behalf of the GoI are made out of this fund\n- No money out of this fund can be issued except in accordance with a parliamentary law'
          },
          {
            id: 'tof-2',
            front: 'What is the Public Account of India? (Article 266)',
            back: '- All public money other than those credited to the Consolidated Fund of India shall be credited here\n- Includes: PF deposits, Judicial deposits, Savings Banks deposits, Departmental deposits, Remittances, etc.\n- Operated by executive action (no parliamentary authorisation needed for withdrawals)'
          },
          {
            id: 'tof-3',
            front: 'What is the Contingency Fund of India? (Article 267)',
            back: '- Amounts determined by Parliament by law are paid from time to time into this fund\n- Placed at the disposal of the President, who can make advances out of it to meet unforeseen expenditure\n- Held by the finance secretary on behalf of the President\n- Operated by executive action'
          },
          {
            id: 'tof-4',
            front: 'Compare: Which funds need parliamentary authorisation for withdrawals?',
            back: 'Consolidated Fund of India: YES — no money can be issued except by parliamentary law (UPSC 2015)\nPublic Account of India: NO — operated by executive action\nContingency Fund of India: NO — operated by executive action (President makes advances)'
          },
        ],
        quiz: [
          {
            id: 'tof-q1',
            question: 'No money can be withdrawn from the Consolidated Fund of India except: (UPSC 2015)',
            options: [
              'By executive order',
              'In accordance with a parliamentary law',
              'By Presidential decree',
              'By Cabinet resolution'
            ],
            correct: 1,
            explanation: 'No money out of the Consolidated Fund can be issued except in accordance with a parliamentary law (Article 266).'
          },
          {
            id: 'tof-q2',
            question: 'The Contingency Fund of India is held by:',
            options: ['The President directly', 'The Finance Minister', 'The Finance Secretary on behalf of the President', 'The RBI Governor'],
            correct: 2,
            explanation: 'The Contingency Fund is held by the finance secretary on behalf of the President and is operated by executive action.'
          },
          {
            id: 'tof-q3',
            question: 'PF deposits and Judicial deposits are credited to:',
            options: ['Consolidated Fund of India', 'Public Account of India', 'Contingency Fund of India', 'None of these'],
            correct: 1,
            explanation: 'PF deposits, Judicial deposits, Savings Banks deposits, etc. are credited to the Public Account of India (Article 266).'
          },
          {
            id: 'tof-q4',
            question: 'The Contingency Fund of India is used for:',
            options: [
              'Regular government expenditure',
              'Meeting unforeseen expenditure',
              'Paying government salaries',
              'International loans'
            ],
            correct: 1,
            explanation: 'The Contingency Fund (Article 267) is used by the President to make advances for unforeseen expenditure.'
          },
          {
            id: 'tof-q5',
            question: 'Which fund is operated by executive action without parliamentary authorisation?',
            options: [
              'Consolidated Fund of India only',
              'Public Account and Contingency Fund',
              'All three funds',
              'None of the funds'
            ],
            correct: 1,
            explanation: 'Both Public Account and Contingency Fund are operated by executive action. Only the Consolidated Fund requires parliamentary authorisation.'
          },
        ]
      },
      {
        id: 'position-of-rajya-sabha-vs-lok-sabha',
        name: 'Position of Rajya Sabha with Respect to Lok Sabha',
        flashcards: [
          {
            id: 'rsls-1',
            front: 'In which matters does the Rajya Sabha have EQUAL status with the Lok Sabha? (UPSC 2020, 2013)',
            back: '- Ordinary bills\n- Constitutional amendment bills (UPSC 2020, 2013)\n- Financial bills involving expenditure from the Consolidated Fund of India\n- Election and Impeachment of the President\n- Recommendation to the President for removal of CJI, SC and HC judges, CEC and CAG\n- Election and removal of Vice President (RS can alone initiate removal)\n- Approval of ordinance issued by President\n- Approval for proclamation of emergencies\n- Selection of ministers including PM\n- Consideration of reports of constitutional bodies\n- Enlargement of jurisdiction of SC and UPSC'
          },
          {
            id: 'rsls-2',
            front: 'In which matters does the Rajya Sabha have UNEQUAL status with Lok Sabha? (UPSC 2015)',
            back: '- Money bills can be introduced only in LS; RS has no power to amend/reject the Money Bill (UPSC 2015)\n- LS can either accept or reject all or any RS recommendations on money bills; in both cases, the money bill is deemed passed by both Houses\n- Final power to decide if a bill is a Money Bill is vested in the Speaker of LS\n- Financial Bill-I introduced only in LS\n- Speaker presides over joint sitting\n- RS can only discuss Budget but cannot vote on demand for grants (UPSC 2015)\n- Resolution for discontinuance of national emergency passed only by LS\n- No confidence motion can only be initiated in LS (UPSC 2022, 2014)'
          },
          {
            id: 'rsls-3',
            front: 'What are the Special Powers of the Rajya Sabha?',
            back: '- Article 249: RS can authorise Parliament to make law on state list subjects by a majority of not less than two-thirds of members present and voting (UPSC 2016)\n- Article 312: RS can authorise Parliament to create All India Services common to both Centre and State (UPSC 2012)\n- Article 67: RS alone can initiate a move for the removal of the Vice-President'
          },
          {
            id: 'rsls-4',
            front: 'What special power does the Rajya Sabha have under Articles 352, 356, and 360?',
            back: 'If a proclamation is issued by the President for imposing emergency at a time when the Lok Sabha has been dissolved or the dissolution takes place within the period allowed for its approval, then the proclamation can remain effective even if it is approved by the Rajya Sabha alone.'
          },
        ],
        quiz: [
          {
            id: 'rsls-q1',
            question: 'Constitutional amendment bills have: (UPSC 2020, 2013)',
            options: [
              'LS supremacy',
              'RS supremacy',
              'Equal status in both Houses',
              'Only LS can introduce them'
            ],
            correct: 2,
            explanation: 'Constitutional amendment bills have equal status — both Houses must pass them with the required special majority.'
          },
          {
            id: 'rsls-q2',
            question: 'Rajya Sabha can authorise Parliament to make law on State List subjects under: (UPSC 2016)',
            options: ['Article 249', 'Article 312', 'Article 67', 'Article 352'],
            correct: 0,
            explanation: 'Article 249: RS can authorise Parliament to legislate on state list subjects by a majority of not less than 2/3 of members present and voting.'
          },
          {
            id: 'rsls-q3',
            question: 'No confidence motion can only be initiated in: (UPSC 2022, 2014)',
            options: ['Rajya Sabha', 'Lok Sabha', 'Either House', 'Joint sitting'],
            correct: 1,
            explanation: 'No confidence motion can only be initiated in the Lok Sabha. This is an area of unequal status.'
          },
          {
            id: 'rsls-q4',
            question: 'RS can authorise Parliament to create All India Services under: (UPSC 2012)',
            options: ['Article 249', 'Article 312', 'Article 352', 'Article 67'],
            correct: 1,
            explanation: 'Article 312: RS can authorise Parliament to create All India Services common to both Centre and State.'
          },
          {
            id: 'rsls-q5',
            question: 'Rajya Sabha CANNOT: (UPSC 2015)',
            options: [
              'Discuss the Budget',
              'Vote on demands for grants',
              'Approve ordinances',
              'Approve proclamation of emergencies'
            ],
            correct: 1,
            explanation: 'RS can only discuss the Budget but cannot vote on demands for grants — that power is exclusive to Lok Sabha.'
          },
          {
            id: 'rsls-q6',
            question: 'Who alone can initiate removal of the Vice-President?',
            options: ['Lok Sabha', 'Rajya Sabha', 'Both Houses jointly', 'President'],
            correct: 1,
            explanation: 'Article 67: Rajya Sabha alone can initiate a move for the removal of the Vice-President. This is a special power of RS.'
          },
          {
            id: 'rsls-q7',
            question: 'During dissolution of Lok Sabha, emergency proclamation can remain effective if approved by:',
            options: ['President alone', 'Rajya Sabha alone', 'Cabinet', 'Governor'],
            correct: 1,
            explanation: 'Under Art 352/356/360, if LS is dissolved, the proclamation can remain effective if approved by RS alone.'
          },
        ]
      },
      {
        id: 'parliamentary-privileges',
        name: 'Parliamentary Privileges',
        flashcards: [
          {
            id: 'pp-1',
            front: 'What are the Collective Privileges of Parliament?',
            back: '- Right to publish its reports, debates, and proceedings; right to prohibit others from publishing the same\n- Hold secret sittings excluding strangers from proceedings\n- Make rules to regulate its own procedure and conduct of business, and to adjudicate upon such matters\n- Punish members as well as outsiders for breach of privileges or contempt\n- Right to receive immediate information of arrest, detention, conviction, imprisonment and release of a member\n- Inquiries and orders the attendance of witnesses and sends for relevant papers and records'
          },
          {
            id: 'pp-2',
            front: 'What are the Individual Privileges of MPs?',
            back: '- Cannot be arrested during the session of Parliament and 40 days before the beginning and 40 days after the end of a session (applicable only in civil cases, NOT in criminal cases or preventive detention cases)\n- Freedom of Speech: No member is liable to any proceedings in any court for anything said or any vote given by him in Parliament or its committees'
          },
          {
            id: 'pp-3',
            front: 'What is the privilege regarding courts and Parliament?',
            back: '- Courts are prohibited to inquire into the proceedings of a House or its committees\n- No person (either a member or outsider) can be arrested, and no legal process (civil or criminal) can be served within the precincts of the House without the permission of the presiding officer'
          },
          {
            id: 'pp-4',
            front: 'What is the privilege regarding jury service for MPs?',
            back: 'Exempted from Jury Service: An MP can refuse to give evidence and appear as a witness in a case pending in a court when Parliament is in session.'
          },
          {
            id: 'pp-5',
            front: 'What is the immunity from arrest for MPs?',
            back: 'MPs cannot be arrested:\n- During the session\n- 40 days before the session begins\n- 40 days after the session ends\n\nThis applies ONLY to civil cases — NOT to criminal cases or preventive detention.'
          },
        ],
        quiz: [
          {
            id: 'pp-q1',
            question: 'MPs cannot be arrested during session and for how many days before and after?',
            options: ['20 days', '30 days', '40 days', '60 days'],
            correct: 2,
            explanation: 'MPs cannot be arrested during session and 40 days before the beginning and 40 days after the end of a session.'
          },
          {
            id: 'pp-q2',
            question: 'The immunity from arrest for MPs applies to:',
            options: [
              'All cases including criminal',
              'Only civil cases, not criminal or preventive detention',
              'Only criminal cases',
              'Both civil and criminal cases'
            ],
            correct: 1,
            explanation: 'The immunity applies only in civil cases — NOT in criminal cases or preventive detention cases.'
          },
          {
            id: 'pp-q3',
            question: 'Freedom of Speech privilege means:',
            options: [
              'MPs can say anything anywhere without consequences',
              'No member is liable to court proceedings for anything said or voted in Parliament or its committees',
              'MPs cannot be criticised in media',
              'MPs can override court orders'
            ],
            correct: 1,
            explanation: 'No member is liable to any proceedings in any court for anything said or any vote given by him in Parliament or its committees.'
          },
          {
            id: 'pp-q4',
            question: 'No legal process can be served within the precincts of the House without permission of:',
            options: ['President', 'Prime Minister', 'Presiding Officer', 'Attorney General'],
            correct: 2,
            explanation: 'No person can be arrested and no legal process can be served within the precincts of the House without permission of the presiding officer.'
          },
          {
            id: 'pp-q5',
            question: 'Courts are prohibited to:',
            options: [
              'Hear cases filed by MPs',
              'Inquire into the proceedings of a House or its committees',
              'Appoint judges recommended by Parliament',
              'Hear election petitions'
            ],
            correct: 1,
            explanation: 'Courts are prohibited to inquire into the proceedings of a House or its committees — this is a collective privilege.'
          },
          {
            id: 'pp-q6',
            question: 'An MP can refuse to appear as a witness in court when:',
            options: [
              'Anytime they want',
              'During elections',
              'When Parliament is in session',
              'When they hold a ministry'
            ],
            correct: 2,
            explanation: 'MPs are exempted from jury service and can refuse to give evidence and appear as a witness when Parliament is in session.'
          },
        ]
      },
      {
        id: 'important-parliamentary-committees',
        name: 'Important Parliamentary Committees',
        flashcards: [
          {
            id: 'ipc-1',
            front: 'What is the Estimates Committee?',
            back: 'Origin: Traced to standing financial committee set up in 1921. First post-independence Estimates Committee set up in 1950 on recommendation of John Mathai.\nComposition: 30 members, all from Lok Sabha (largest committee) (UPSC 2014). Elected every year by proportional representation (single transferable vote). Minister cannot be a member.\nFunction: Examine the budget and suggest economies of public expenditure; suggest alternative policy to ensure economies.'
          },
          {
            id: 'ipc-2',
            front: 'What is the Public Accounts Committee (PAC)? (UPSC 2013)',
            back: 'Set up first in 1921 under GOI Act 1919. CAG acts as guide, friend and philosopher of the Committee.\nComposition: 22 = 15(LS) + 7(RS) (UPSC 2013). Elected for one year by proportional representation (single transferable vote). Minister cannot be a member. Chairman appointed by Speaker from amongst members.\nChairman: Until 1966-67 from ruling party. Since 1967: invariably from the Opposition.'
          },
          {
            id: 'ipc-3',
            front: 'What does the Public Accounts Committee examine? (UPSC 2013)',
            back: 'Examines CAG Audit report and discovers irregularities.\nExamines public expenditure not only from legal and formal point of view but also from the point of view of economy, prudence, wisdom and propriety. (UPSC 2013)'
          },
          {
            id: 'ipc-4',
            front: 'What is the Committee on Public Undertakings?',
            back: 'Origin: Krishna Menon Committee, 1964.\nComposition: Originally 15 members (10 LS + 5 RS). Since 1974, raised to 22 (15 LS + 7 RS). Minister cannot be a member. Chairman appointed by Speaker from LS members only.\nFunction: Examine reports and accounts of public sector undertakings. Does NOT involve in day-to-day affairs of PSUs. Recommendations are advisory and not binding on ministries.'
          },
          {
            id: 'ipc-5',
            front: 'Compare: Estimates Committee vs PAC vs Committee on Public Undertakings',
            back: 'Estimates Committee: 30 members (all LS), examines budget, suggests economies\nPAC: 22 members (15 LS + 7 RS), examines CAG audit reports, Chairman from Opposition since 1967\nPublic Undertakings: 22 members (15 LS + 7 RS), examines PSU reports/accounts, advisory recommendations\n\nCommon: All elected by proportional representation (STV), Minister cannot be a member'
          },
        ],
        quiz: [
          {
            id: 'ipc-q1',
            question: 'The Estimates Committee has: (UPSC 2014)',
            options: ['15 members from LS', '22 members from both Houses', '30 members all from LS', '30 members from both Houses'],
            correct: 2,
            explanation: 'The Estimates Committee has 30 members, all from Lok Sabha — making it the largest parliamentary committee.'
          },
          {
            id: 'ipc-q2',
            question: 'The Public Accounts Committee composition is: (UPSC 2013)',
            options: ['30 members all from LS', '22 = 15(LS) + 7(RS)', '15 members all from LS', '22 = 12(LS) + 10(RS)'],
            correct: 1,
            explanation: 'PAC has 22 members: 15 from Lok Sabha and 7 from Rajya Sabha.'
          },
          {
            id: 'ipc-q3',
            question: 'Since 1967, the Chairman of PAC is invariably from:',
            options: ['Ruling party', 'Opposition', 'Rajya Sabha', 'Nominated members'],
            correct: 1,
            explanation: 'Since 1967, the Chairman of PAC has invariably been from the Opposition. Before 1966-67, Chairman was from the ruling party.'
          },
          {
            id: 'ipc-q4',
            question: 'The CAG acts as guide, friend and philosopher of: (UPSC 2013)',
            options: ['Estimates Committee', 'Public Accounts Committee', 'Committee on Public Undertakings', 'Finance Committee'],
            correct: 1,
            explanation: 'The CAG acts as guide, friend and philosopher of the Public Accounts Committee.'
          },
          {
            id: 'ipc-q5',
            question: 'The Committee on Public Undertakings was set up on the recommendation of:',
            options: ['John Mathai', 'Krishna Menon Committee, 1964', 'Sarkaria Commission', 'Balwant Rai Mehta Committee'],
            correct: 1,
            explanation: 'The Committee on Public Undertakings was set up based on the Krishna Menon Committee recommendation in 1964.'
          },
          {
            id: 'ipc-q6',
            question: 'Recommendations of the Committee on Public Undertakings are:',
            options: [
              'Binding on ministries',
              'Binding on PSUs',
              'Advisory and not binding on ministries',
              'Enforceable by courts'
            ],
            correct: 2,
            explanation: 'Recommendations of the Committee on Public Undertakings are advisory and not binding on the ministries.'
          },
          {
            id: 'ipc-q7',
            question: 'The first post-independence Estimates Committee was set up in 1950 on recommendation of:',
            options: ['Krishna Menon', 'John Mathai', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar'],
            correct: 1,
            explanation: 'The first Estimates Committee in the post-independence era was set up in 1950 on the recommendation of John Mathai.'
          },
          {
            id: 'ipc-q8',
            question: 'Which committee does NOT include Rajya Sabha members?',
            options: ['Public Accounts Committee', 'Committee on Public Undertakings', 'Estimates Committee', 'All include RS members'],
            correct: 2,
            explanation: 'The Estimates Committee has 30 members all from Lok Sabha only. PAC and Public Undertakings Committee include RS members.'
          },
        ]
      },
      {
        id: 'other-parliamentary-committees',
        name: 'Other Parliamentary Committees',
        flashcards: [
          {
            id: 'opc-1',
            front: 'What is the Rules Committee?',
            back: 'Purpose: Considers procedural matters and recommends amendments to House rules.\nComposition: 15 members (LS, including Speaker) as ex-officio chairman; 16 members (RS, including Chairman).'
          },
          {
            id: 'opc-2',
            front: 'What is the Business Advisory Committee?',
            back: 'Purpose: Regulates the program and timetable of the House, allocating time for legislative business.\nComposition: 15 members (LS, including Speaker); 11 members (RS, including Chairman).'
          },
          {
            id: 'opc-3',
            front: 'What is the General Purposes Committee?',
            back: 'Purpose: Advice on matters concerning the affairs of the House outside other committees\' jurisdiction.\nComposition: Numbers not given but includes the presiding officer (Speaker/Chairman) as ex-officio chairman, Deputy Speaker (Deputy Chairman in RS), members of panel of chairpersons, chairpersons of all departmental standing committees, leaders of recognised parties and groups, and such other members as nominated by the presiding officer.'
          },
          {
            id: 'opc-4',
            front: 'What is the Committee on Subordinate Legislation? (UPSC 2018)',
            back: 'Purpose: Oversees rules and regulations made by authorities under legislative powers.\nComposition: 15 members (LS); 15 members (RS), nominated by the Speaker or Chairman.'
          },
          {
            id: 'opc-5',
            front: 'What is the Committee on Welfare of SC and ST?',
            back: 'Purpose: Focuses on issues affecting Scheduled Castes and Scheduled Tribes.\nComposition: 30 members (20 from LS, 10 from RS), nominated by the Speaker or Chairman.'
          },
          {
            id: 'opc-6',
            front: 'What is the Committee on Empowerment of Women?',
            back: 'Purpose: Addresses issues related to women\'s empowerment.\nComposition: 30 members (20 from LS, 10 from RS), nominated by the Speaker.'
          },
          {
            id: 'opc-7',
            front: 'What is the Joint Committee on Offices of Profit?',
            back: 'Purpose: Examines the implications of offices of profit.\nComposition: 15 members (10 from LS, 5 from RS).'
          },
          {
            id: 'opc-8',
            front: 'What are the Committee on Petitions, Privileges, and Ethics?',
            back: 'Committee on Petitions: Reviews petitions submitted to the House. 15 LS + 10 RS, nominated by Speaker/Chairman.\n\nCommittee of Privileges: Addresses matters related to privileges of House members. 15 LS + 10 RS, nominated by Speaker/Chairman.\n\nEthics Committee: Oversees ethical conduct and behaviour among members. No fixed strength; separate for both Houses, nominated by Speaker/Chairman.'
          },
          {
            id: 'opc-9',
            front: 'What are the Library Committee and Joint Committee on Salaries?',
            back: 'Library Committee: Oversees functioning and management of Parliament Library. 9 members (6 LS, 3 RS); Chairperson appointed by Speaker.\n\nJoint Committee on Salaries and Allowances: Reviews and recommends salaries and allowances for members. 15 members (10 LS, 5 RS).'
          },
        ],
        quiz: [
          {
            id: 'opc-q1',
            question: 'The Committee on Subordinate Legislation oversees: (UPSC 2018)',
            options: [
              'Budget allocations',
              'Rules and regulations made by authorities under legislative powers',
              'Election procedures',
              'Judicial appointments'
            ],
            correct: 1,
            explanation: 'The Committee on Subordinate Legislation oversees rules and regulations made by authorities under legislative powers.'
          },
          {
            id: 'opc-q2',
            question: 'The Committee on Welfare of SC and ST has:',
            options: ['15 members', '22 members', '30 members', '20 members'],
            correct: 2,
            explanation: 'The Committee on Welfare of SC and ST has 30 members (20 from LS, 10 from RS).'
          },
          {
            id: 'opc-q3',
            question: 'The Ethics Committee has:',
            options: [
              '15 members from each House',
              '30 members total',
              'No fixed strength; separate for both Houses',
              '22 members total'
            ],
            correct: 2,
            explanation: 'The Ethics Committee has no fixed strength and is separate for both Houses, nominated by the Speaker or Chairman.'
          },
          {
            id: 'opc-q4',
            question: 'The Business Advisory Committee regulates:',
            options: [
              'House rules and amendments',
              'The program and timetable of the House',
              'Subordinate legislation',
              'Privileges of members'
            ],
            correct: 1,
            explanation: 'The Business Advisory Committee regulates the program and timetable of the House, allocating time for legislative business.'
          },
          {
            id: 'opc-q5',
            question: 'The Library Committee has how many members?',
            options: ['9 (6 LS + 3 RS)', '15 (10 LS + 5 RS)', '22 (15 LS + 7 RS)', '30 (20 LS + 10 RS)'],
            correct: 0,
            explanation: 'The Library Committee has 9 members (6 from LS, 3 from RS); Chairperson appointed by the Speaker.'
          },
          {
            id: 'opc-q6',
            question: 'The Joint Committee on Offices of Profit examines:',
            options: [
              'Salaries of MPs',
              'The implications of offices of profit',
              'Public sector undertakings',
              'CAG audit reports'
            ],
            correct: 1,
            explanation: 'The Joint Committee on Offices of Profit examines the implications of offices of profit. It has 15 members (10 LS + 5 RS).'
          },
        ]
      }
    ]
  }
]

export default topicsData

export function getTopic(topicId) {
  return topicsData.find(t => t.id === topicId)
}

export function getSubtopic(topicId, subtopicId) {
  const topic = getTopic(topicId)
  if (!topic) return null
  return topic.subtopics.find(s => s.id === subtopicId)
}

export function getAllFlashcardIds() {
  const ids = []
  topicsData.forEach(topic => {
    topic.subtopics.forEach(sub => {
      sub.flashcards.forEach(fc => ids.push(fc.id))
    })
  })
  return ids
}

export function getSubtopicFlashcardIds(topicId, subtopicId) {
  const sub = getSubtopic(topicId, subtopicId)
  if (!sub) return []
  return sub.flashcards.map(fc => fc.id)
}
