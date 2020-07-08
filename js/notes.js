var notes = [
    {
        "code": "ECE105",
        "link": "https://drive.google.com/drive/folders/1uqygRWErQkGPWUzYH5r3vzWTnBtonytX",
    },
    {
        "code": "MATH115",
        "link": "https://drive.google.com/drive/folders/1z98GzkybUglFCTUmmVcoRwMX2r-3Lu0x?usp=sharing",
    },
    {
        "code": "MATH117",
        "link": "https://drive.google.com/drive/folders/1Z9clZXyg5QN4zFKdu2vZjmP1l8kVDoie?usp=sharing",
    },
    {
        "code": "MATH135",
        "link": "https://drive.google.com/drive/folders/11DmXDATDIosBIRRrV04amHMXGT4ebDx3?usp=sharing",
    },
    {
        "code": "ECE106",
        "link": "https://drive.google.com/drive/folders/16s7m0MazNybKdO5LU3HVwk6ZKCm7n53m?usp=sharing",
    },
    {
        "code": "ECE124",
        "link": "https://drive.google.com/drive/folders/1TDJgDytqX5U2Rn0zBpfiHBg6WxM8jFrv?usp=sharing",
    },
    {
        "code": "ECE140",
        "link": "https://drive.google.com/drive/folders/1TBL8I2qLIhDZp5LoIubQA724S3sUj0wV?usp=sharing",
    },
    {
        "code": "MATH119",
        "link": "https://drive.google.com/drive/folders/1LYvsYM_nfCDmcfhVSwzIE5piCOlYYwqe?usp=sharing",
    },
    {
        "code": "CS241E",
        "link": "https://drive.google.com/drive/folders/1F19uKlQ40H_SDix2_pCJrPuz9RcVFHLm?usp=sharing",
    },
    {
        "code": "ECE222",
        "link": "https://drive.google.com/drive/folders/1tHU6jc2OGLFiCBF3c04UEMYus8DQPEPu?usp=sharing",
    },
    {
        "code": "SE212",
        "link": "https://drive.google.com/drive/folders/1tWFTjLZNgEhKb7lxupBqRqs-E-NGD_CH?usp=sharing",
    },
    {
        "code": "STAT206",
        "link": "https://drive.google.com/file/d/1AeTRRLrNN5OjeM__esNF_EHMz1aQAta3/view?usp=sharing",
    },
    {
        "code": "CS240E",
        "link": "https://drive.google.com/drive/folders/1ZuvjyL1qjr6fJCAkRWz_lb6JWCQ692M0?usp=sharing",
    },
    {
        "code": "CS247",
        "link": "https://drive.google.com/drive/folders/1gohAx53cNpsfkKUHlcWjVxgZWhiTHu81?usp=sharing",
    },
    {
        "code": "MATH213",
        "link": "https://drive.google.com/drive/folders/1jMctWuLsWdAD5rUDH7xT-2S19jBR3Qgc?usp=sharing",
    },
]


window.addEventListener("load", function () {
    populate_notes_list()
});

function populate_notes_list() {
    var notes_list = document.getElementById("notes-list");
    notes.forEach(note => {
        notes_list.innerHTML += get_note_link(
            note
        );
    });
}

function get_note_link(note) {
    return "<li>" + 
    "<a target='_blank' href='" + note.link + "'>" + note.code + "</a>"
    + "</li>"
}

