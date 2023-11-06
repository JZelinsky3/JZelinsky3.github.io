const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get('/',(req, res) => {
    res.sendFile(__dirname + "/index.html");
}); 

    app.get("/api/data", (req, res) => {
        
        const data = [
            {
            id: 1,
            title: 'Back in Black',
            artist: 'AC/DC',
            year: 1980,
            tracks: ['Hells Bells', 'Shoot to Thrill', 'Back in Black'],
            image: 'img/bib.png',
          },
          {
            id: 2,
            title: 'Led Zeppelin IV',
            artist: 'Led Zeppelin',
            year: 1971,
            tracks: ['Stairway to Heaven', 'Black Dog', 'Rock and Roll'],
            image: 'img/lz4.jpg',
          },
          {
            id: 3,
            title: 'Nevermind',
            artist: 'Nirvana',
            year: 1991,
            tracks: ['Smells Like Teen Spirit', 'In Bloom', 'Come as You Are'],
            image: 'img/never.jpg',
          },
          {
            id: 4,
            title: 'The Dark Side of the Moon',
            artist: 'Pink Floyd',
            year: 1973,
            tracks: ['Time', 'Money', 'Us and Them'],
            image: 'img/dsotm.jpg',
          },
          {id: 5,
          title: 'Rumours',
          artist: 'Fleetwood Mac',
          year: 1977,
          tracks: ['Go Your Own Way', 'Dreams', 'Don\'t Stop'],
          image: 'img/rumours.jpg'
          }
        ];
    
        res.json(data);
    });
    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });