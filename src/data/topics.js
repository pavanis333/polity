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
