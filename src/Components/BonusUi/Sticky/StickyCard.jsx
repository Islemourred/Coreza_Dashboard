import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Input } from "reactstrap";
import { H4 } from "../../../AbstractElements";
import { AddNewNote, Href, StickyNote } from "../../../Constant";
import axios from "axios";

const StickyCard = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.PUBLIC_URL}/api/sticky.json`)
      .then((res) => setNotes(res.data));
  }, []);

  const addStickyNote = () => {
    setNotes([...notes, { id: notes.length + 1, isDeleted: false }]);
  };

  const deleteNote = (note) => {
    note.isDeleted = true;
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <H4>{StickyNote}<a href={Href} onClick={addStickyNote} className="btn btn-primary pull-right m-l-10">{AddNewNote}</a></H4>
      </CardHeader>
      <CardBody>
        <div className="sticky-note" id="board">
          {notes.map((data,index) => (
            <div className={`note ui-draggable ui-draggable-handle ${data.isDeleted && "d-none"}`}key={index}>
              <a href={Href} onClick={() => deleteNote(data)} className="button remove">{"X"}</a>
              <div className="note_cnt">
                <Input className="title" placeholder="Enter note title" type="textarea" style={{ height: "64px" }}></Input>
                <Input className="cnt" placeholder="Enter note description here" type="textarea" style={{ height: "200px" }}></Input>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default StickyCard;