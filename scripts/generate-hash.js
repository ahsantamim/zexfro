#!/usr/bin/env node

/**
 * Password Hash Generator for User Setup
 * Run: node scripts/generate-hash.js
 */

const bcrypt = require('bcryptjs');

async function generateHash() {
  const password = process.argv[2] || 'zexfro12341234';
  
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    console.log('\n=================================');
    console.log('Password Hash Generator');
    console.log('=================================');
    console.log(`Password: ${password}`);
    console.log(`Hash: ${hash}`);
    console.log('\nUse this hash in your database');
    console.log('=================================\n');
  } catch (error) {
    console.error('Error generating hash:', error);
    process.exit(1);
  }
}

generateHash();
