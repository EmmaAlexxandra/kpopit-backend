-- ENUM definitions (PostgreSQL-style)
CREATE TYPE subscription_tier AS ENUM ('free', 'supporter', 'vip');
CREATE TYPE music_platform AS ENUM ('spotify', 'apple_music', 'youtube_music');

-- Groups Table
CREATE TABLE groups (
    debut_date INT PRIMARY KEY,
    group_name VARCHAR(255) NOT NULL UNIQUE,
    hex_code VARCHAR(7) NOT NULL CHECK (hex_code LIKE '#______')
);

-- Idols Table
CREATE TABLE idols (
    birthday INT PRIMARY KEY,
    group_name VARCHAR(255) NOT NULL,
    stage_name VARCHAR(255) NOT NULL,
    legal_name VARCHAR(255) NOT NULL
);

CREATE INDEX idx_idols_group_name ON idols(group_name);

-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY,
    oauth_provider VARCHAR(255) NOT NULL,
    oauth_id VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT '',
    subscription subscription_tier NOT NULL DEFAULT 'free',
    profile_picture JSONB,
    biases JSON NOT NULL DEFAULT '[]',
    content JSONB NOT NULL DEFAULT '{}',
    votes_used JSON NOT NULL DEFAULT '{}',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Posts Table
CREATE TABLE posts (
    id TIMESTAMP PRIMARY KEY DEFAULT CURRENT_TIMESTAMP,
    user_id UUID NOT NULL REFERENCES users(id),
    content JSONB NOT NULL,
    likes INT NOT NULL DEFAULT 0,
    shares INT NOT NULL DEFAULT 0,
    group_id INT REFERENCES groups(debut_date),
    idol_birthday JSON,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    comments JSON NOT NULL DEFAULT '[]'
);

-- Tags Table
CREATE TABLE tags (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    tag_string VARCHAR(255) NOT NULL UNIQUE,
    post_id TIMESTAMP NOT NULL REFERENCES posts(id)
);

-- Playlists Table
CREATE TABLE playlists (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    platform music_platform NOT NULL,
    content JSONB NOT NULL,
    public BOOLEAN NOT NULL DEFAULT TRUE,
    ai_generated BOOLEAN NOT NULL,
    shares INT NOT NULL DEFAULT 0
);

-- Polls Table
CREATE TABLE polls (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_by VARCHAR(255) NOT NULL REFERENCES users(username),
    title VARCHAR(255) NOT NULL,
    options JSONB NOT NULL,
    poll_type VARCHAR(100) NOT NULL,
    closing_date TIMESTAMP NOT NULL
);

-- notifications Table
CREATE TABLE notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(id),
    content JSONB NOT NULL,
    read BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


