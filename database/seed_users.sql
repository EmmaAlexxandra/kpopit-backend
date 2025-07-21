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
),

(
    'f2a0c7c4-b1f1-4e9a-947d-7b8b9e9a1234', 'google', 'google-oauth-4444', 'jkspin@example.com', 'jaykay_hyper',
    'Literally spinning since 3RACHA dropped.', 'Main dancer energy 24/7.', 'free',
    '{"alt": "Profile pic of jaykay_hyper", "url": "https://cdn.kpopit.com/images/avatars/jkspin.png", "uploaded_at": "2025-07-21T13:00:00Z"}',
    '[{"bias": "Jungkook", "since": 2019}, {"bias": "Changbin", "since": 2020}]',
    '{"q1": "Found JK via G.C.F. vids.", "q2": "I need a JK x SKZ dance break collab."}', '{}',
    '2025-07-21T13:00:00Z', '2025-07-21T13:00:00Z'
),
-- User for Joon stare post
(
    'aa238f9b-fcd2-4b1d-bfc3-9a2c1f0b1235', 'kakao', 'kakao-9911', 'joonstare@example.com', 'intense_leader',
    'My entire mood is based on RM’s facial expressions.', 'Trying to survive Namjoon fancams.', 'supporter',
    '{"alt": "Profile pic of intense_leader", "url": "https://cdn.kpopit.com/images/avatars/joonstare.png", "uploaded_at": "2025-07-21T13:01:00Z"}',
    '[{"bias": "RM", "since": 2015}]',
    '{"q1": "RM’s Mono album changed everything.", "q2": "RM x IU collab would destroy me."}', '{}',
    '2025-07-21T13:01:00Z', '2025-07-21T13:01:00Z'
),
-- User for Yuna footwork post
(
    '9c03f6fa-2fc1-4d67-8de5-4e2b5f3b1236', 'apple', 'apple-oauth-8831', 'itzyfan234@example.com', 'shinysteps',
    'Dancer + MIDZY = constant awe.', 'Trying to copy Yuna’s choreo since 2020.', 'free',
    '{"alt": "Profile of shinysteps", "url": "https://cdn.kpopit.com/images/avatars/shinysteps.png", "uploaded_at": "2025-07-21T13:02:00Z"}',
    '[{"bias": "Yuna", "since": 2020}, {"bias": "Kai", "since": 2021}]',
    '{"q1": "Random TikTok → Itzy rabbit hole.", "q2": "I need Itzy x EXO dance line collab."}', '{}',
    '2025-07-21T13:02:00Z', '2025-07-21T13:02:00Z'
),
-- User for Soobin predebut post
(
    'ba93d017-6d87-43c3-b77b-61e1c23a1237', 'github', 'gh-oauth-1999', 'soobsoftie@example.com', 'moa_cutie',
    'Soft boy supremacy.', 'Soobin’s predebut pics live in my brain.', 'supporter',
    '{"alt": "Profile of moa_cutie", "url": "https://cdn.kpopit.com/images/avatars/soobsoftie.png", "uploaded_at": "2025-07-21T13:03:00Z"}',
    '[{"bias": "Soobin", "since": 2019}]',
    '{"q1": "I got into TXT after seeing a Soobin meme.", "q2": "Beomgyu + Soobin = chaotic duo I love."}', '{}',
    '2025-07-21T13:03:00Z', '2025-07-21T13:03:00Z'
),
-- User for Jimin laughing post
(
    '1f2d4e88-0e77-49dc-a11f-5a0a9b3b1238', 'facebook', 'fb-user-5593', 'mochimood@example.com', 'jiminielaugh',
    'You’re not truly happy unless Jimin makes you laugh.', 'Collecting every laughing Jimin clip.', 'vip',
    '{"alt": "Profile of jiminielaugh", "url": "https://cdn.kpopit.com/images/avatars/jiminielaugh.png", "uploaded_at": "2025-07-21T13:04:00Z"}',
    '[{"bias": "Jimin", "since": 2016}]',
    '{"q1": "First saw Jimin in a BTS try-not-to-laugh comp.", "q2": "He deserves his own sitcom."}', '{}',
    '2025-07-21T13:04:00Z', '2025-07-21T13:04:00Z'
),
-- User for Chaeryeong expression post
(
    'fb8b914a-0fcd-49ff-993a-2d87a3d11239', 'twitter', 'tw-user-3290', 'chaefacefan@example.com', 'chaemaster',
    'Stan Chaeryeong for clear skin ✨', 'Zooming in on her expressions daily.', 'supporter',
    '{"alt": "Profile of chaemaster", "url": "https://cdn.kpopit.com/images/avatars/chaemaster.png", "uploaded_at": "2025-07-21T13:05:00Z"}',
    '[{"bias": "Chaeryeong", "since": 2019}]',
    '{"q1": "Mafia in the Morning MV sealed it.", "q2": "She needs a solo photobook ASAP."}', '{}',
    '2025-07-21T13:05:00Z', '2025-07-21T13:05:00Z'
),
-- User for Hyunjin flower post
(
    '3d9c8456-d99b-42d2-9fd3-302fd12b123b', 'naver', 'naver-user-7777', 'hyunflower@example.com', 'artboylover',
    'Hyunjin is visual poetry.', 'Every photo shoot is a masterpiece.', 'vip',
    '{"alt": "Profile of artboylover", "url": "https://cdn.kpopit.com/images/avatars/artboylover.png", "uploaded_at": "2025-07-21T13:06:00Z"}',
    '[{"bias": "Hyunjin", "since": 2020}]',
    '{"q1": "The Studio Choom performance changed me.", "q2": "Hyunjin x Taemin collab when?"}', '{}',
    '2025-07-21T13:06:00Z', '2025-07-21T13:06:00Z'
),
(
    '2c97b3ae-774f-4d0d-8903-561fd891123a', 'google', 'google-oauth-7771', 'stayloud@example.com', 'felixboom',
    'Stray Kids saved my playlists 🔥', 'Felix’s deep voice cured my depression.', 'supporter',
    '{"alt": "Profile of felixboom", "url": "https://cdn.kpopit.com/images/avatars/felixboom.png", "uploaded_at": "2025-07-21T13:07:00Z"}',
    '[{"bias": "Felix", "since": 2020}, {"bias": "Bang Chan", "since": 2018}]',
    '{"q1": "Started watching SKZ survival clips. Now I’m obsessed.", "q2": "I want a Felix solo album with sub-bass production."}',
    '{}', '2025-07-21T13:07:00Z', '2025-07-21T13:07:00Z'
),
(
    '7a116239-f241-490e-b3f7-223f8b3c123c', 'naver', 'naver-user-3094', 'petalstorm@example.com', 'hyun_visual',
    'Hyunjin is my wallpaper. And my lockscreen. And my personality.', 'Currently crying over Studio Choom.', 'supporter',
    '{"alt": "Profile of hyun_visual", "url": "https://cdn.kpopit.com/images/avatars/hyun_visual.png", "uploaded_at": "2025-07-21T13:08:00Z"}',
    '[{"bias": "Hyunjin", "since": 2020}]',
    '{"q1": "Literally saw a flower photo edit and was gone.", "q2": "Hyunjin x Taemin Vogue shoot WHEN."}', '{}',
    '2025-07-21T13:08:00Z', '2025-07-21T13:08:00Z'
),
(
    '5f143fc5-f8b1-4a5c-83e2-22f7c391123d', 'google', 'google-oauth-9899', 'worldwidejokes@example.com', 'jinjokesdaily',
    'Worldwide funny guy fan since day 1 😂', 'Cataloging Jin’s dad jokes like ancient scripture.', 'free',
    '{"alt": "Profile pic of jinjokesdaily", "url": "https://cdn.kpopit.com/images/avatars/jinjokesdaily.png", "uploaded_at": "2025-07-21T13:09:00Z"}',
    '[{"bias": "Jin", "since": 2016}]',
    '{"q1": "I watched Run BTS for the chaos, stayed for Jin’s punchlines.", "q2": "We need a Jin variety show, stat."}', '{}',
    '2025-07-21T13:09:00Z', '2025-07-21T13:09:00Z'
);
