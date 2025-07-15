INSERT INTO users (
    id, oauth_provider, oauth_id, email, username, bio, status, subscription,
    profile_picture, biases, content, votes_used, created_at, updated_at
) VALUES
-- Original 5 users
(
    '9780bbca-382e-446e-bd23-2b252875e01e', 'google', 'google-oauth-9182', 'carat88@example.com', 'diamond_carat',
    'Multistan with a soft spot for Seventeen 💎', 'Just vibing to choreo compilations.', 'vip',
    '{"alt": "Profile picture of diamond_carat", "url": "https://cdn.kpopit.com/images/avatars/diamond_carat.png", "uploaded_at": "2025-07-13T17:45:00Z"}',
    '[{"bias": "Hoshi", "since": 2018}, {"bias": "Chaeryeong", "since": 2021}]',
    '{"q1": "Got hooked after watching Weekly Idol clips.", "q2": "I need a TXT x ITZY dance battle collab ASAP."}',
    '{}', '2025-07-15T19:59:25.420Z', '2025-07-15T19:59:25.420Z'
),
(
    '9294da19-6141-4af5-a07b-56d74e89a82a', 'kakao', 'kakao-3478', 'staywolf@example.com', 'straywolf',
    'Casual listener turned full-on STAY 😵‍💫', 'Currently hyperfixating on 3RACHA.', 'supporter',
    '{"alt": "Profile picture of straywolf", "url": "https://cdn.kpopit.com/images/avatars/straywolf.png", "uploaded_at": "2025-07-12T11:10:00Z"}',
    '[{"bias": "Han", "since": 2022}, {"bias": "Jisoo", "since": 2020}]',
    '{"q1": "I discovered K-pop through my roommate.", "q2": "Stray Kids x BLACKPINK would break the internet."}',
    '{}', '2025-07-15T19:59:37.855Z', '2025-07-15T19:59:37.855Z'
),
(
    '99b4e364-d1e2-4210-bfc5-c438fb164a7c', 'github', 'gh-oauth-1290', 'dancefan92@example.com', 'dancefan92',
    'Mostly here for dance practice vids 🔥', 'Why is everyone so talented?', 'free',
    '{"alt": "Profile picture of dancefan92", "url": "https://cdn.kpopit.com/images/avatars/dancefan92.png", "uploaded_at": "2025-07-11T15:05:00Z"}',
    '[{"bias": "Yeonjun", "since": 2020}, {"bias": "Ten", "since": 2019}]',
    '{"q1": "My friend dragged me to a KCON livestream and it was over from there.", "q2": "TXT x WayV would be an iconic performance unit."}',
    '{}', '2025-07-15T20:05:01.965Z', '2025-07-15T20:05:01.965Z'
),
(
    '14294cf1-0883-4b28-a765-3a6e3135afc3', 'facebook', 'fb-user-2902', 'vocaltears@example.com', 'late_night_vibes',
    'Just here to cry about vocals 💔', 'Ballads hit different at 2AM.', 'vip',
    '{"alt": "Profile picture of late_night_vibes", "url": "https://cdn.kpopit.com/images/avatars/late_night_vibes.png", "uploaded_at": "2025-07-14T01:22:00Z"}',
    '[{"bias": "Wendy", "since": 2017}, {"bias": "Jungkook", "since": 2016}]',
    '{"q1": "I fell into the rabbit hole during a Red Velvet stage compilation.", "q2": "Jungkook x Wendy duet would make me ascend."}',
    '{}', '2025-07-15T20:05:12.227Z', '2025-07-15T20:05:12.227Z'
),
(
    'c2a81ad8-1d4c-4fbe-a8d3-2a3fcfc9be93', 'google', 'google-oauth-9721', 'moahead@example.com', 'moahead',
    'Proud MOA since debut 💙 TXT got me through college.', 'Manifesting a TXT world tour in 2025 🙏', 'supporter',
    '{"alt": "Profile picture of moahead", "url": "https://cdn.kpopit.com/images/avatars/txtfan_moa.png", "uploaded_at": "2025-07-15T19:45:00Z"}',
    '[{"bias": "Beomgyu", "since": 2019}, {"bias": "Taehyun", "since": 2021}]',
    '{"q1": "Discovered TXT through the Crown MV on YouTube.", "q2": "I want a TXT x Seventeen collab so bad!"}',
    '{}', '2025-07-15T21:19:45.653Z', '2025-07-15T21:19:45.653Z'
),

-- New User 1
(
    'a5d87c1b-940a-4f75-ae5b-351f803d10ba', 'twitter', 'tw-user-5861', 'blinkvibes@example.com', 'pinkvenomqueen',
    'BLACKPINK in your area 💗', 'Waiting for Rosé solo pt.2', 'supporter',
    '{"alt": "Profile picture of pinkvenomqueen", "url": "https://cdn.kpopit.com/images/avatars/pinkvenomqueen.png", "uploaded_at": "2025-07-10T08:30:00Z"}',
    '[{"bias": "Rosé", "since": 2017}, {"bias": "Lisa", "since": 2016}]',
    '{"q1": "Saw Boombayah live and never looked back.", "q2": "Rosé and IU duet would be magical."}',
    '{}', '2025-07-15T22:12:09.001Z', '2025-07-15T22:12:09.001Z'
),

-- New User 2
(
    'b23967a6-e179-4f18-a734-fd264c88a837', 'apple', 'apple-oauth-4821', 'deobione@example.com', 'dkenergy',
    'Deobi and proud 💎', 'DK’s vocals saved my life.', 'vip',
    '{"alt": "Profile picture of dkenergy", "url": "https://cdn.kpopit.com/images/avatars/dkenergy.png", "uploaded_at": "2025-07-15T12:01:00Z"}',
    '[{"bias": "DK", "since": 2020}, {"bias": "Yuna", "since": 2022}]',
    '{"q1": "Got into K-pop through a Seventeen fancam.", "q2": "DK x Baekhyun vocal battle when?"}',
    '{}', '2025-07-15T22:15:00.000Z', '2025-07-15T22:15:00.000Z'
),

-- New User 3
(
    'e87f9b3f-8cf1-4f5b-9881-92cb651cc8f5', 'naver', 'naver-user-2273', 'itzyxiny@example.com', 'wannabequeen',
    'Xiny = Itzy + energy ⚡', 'Currently learning Ryujin’s rap.', 'free',
    '{"alt": "Profile picture of wannabequeen", "url": "https://cdn.kpopit.com/images/avatars/wannabequeen.png", "uploaded_at": "2025-07-13T14:30:00Z"}',
    '[{"bias": "Ryujin", "since": 2019}, {"bias": "Mark", "since": 2021}]',
    '{"q1": "WANNABE hit like lightning during finals week.", "q2": "Need an Itzy x NCT dance break collab ASAP."}',
    '{}', '2025-07-15T22:17:35.777Z', '2025-07-15T22:17:35.777Z'
);
