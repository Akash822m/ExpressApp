let express = require('express');

let cors = require('cors');

let  app = express();

app.use(cors());
const port = 3000;

//List of items
const items = [
  { id: 1, name: 'Tesla Model S', description: 'Electric vehicle with long-range capability' },
  { id: 2, name: 'Ford Mustang GT', description: 'High-performance sports car' },
  { id: 3, name: 'BMW X5', description: 'Luxury SUV with spacious interior' },
  { id: 4, name: 'Audi A6', description: 'Premium sedan with advanced technology' },
];

// Middleware to handle JSON requests
app.use(express.json());


app.get('/items', (req, res) => {
  res.json({
    success: true,
    message: 'List of items fetched successfully',
    data: items,
  });
});


app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((i) => i.id === itemId);

  if (item) {
    res.json({
      success: true,
      message: 'Item fetched successfully',
      data: item,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Item not found',
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
