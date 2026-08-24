const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [
    {
      name: String,
      color: String,
    },
  ],
  image: {
    type: String,
    default: 'https://via.placeholder.com/600x400',
  },
  sourceCodeLink: {
    type: String,
    default: '#',
  },
  liveDemoLink: {
    type: String,
    default: '#',
  },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);