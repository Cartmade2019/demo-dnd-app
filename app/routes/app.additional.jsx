import {
  Box,
  Card,
  Layout,
  Link,
  List,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import {DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors} from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "./components/Column/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Input } from "./components/Input/Input";

export default function AdditionalPage() {
  const [tasks,setTasks] = useState([
    {id:1,title:"Price",metakey:'price'},
    {id:2,title:"Collection",metakey:'collection'},
    {id:3,title:"Vendor",metakey:'vendor'},
  ]);

  const addTask = (title,metakey) => {
    setTasks(prevtasks => [...prevtasks, {id:prevtasks.length+1,title:title,metakey:metakey}])
    console.log('all tasks',...tasks)
  }
  const removeTask = title => {
    console.log('all tasks',...tasks)
    setTasks(tasks => tasks.filter(task => task.title !== title))
  }
  const getTaskPos = id => tasks.findIndex(task=>task.id===id);
  const handleDragEnd = event => {
    const {active,over} = event;
    if(active.id === over.id) return;

    setTasks(tasks => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks,originalPos,newPos);
    })
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter : sortableKeyboardCoordinates,
    }),
  );
  return (
    <Page>
      <ui-title-bar title="Filters" />
      <Layout>
       <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTask}  />
        <Column tasks={tasks} onRemove={removeTask}/>
       </DndContext>
      </Layout>
    </Page>
  );
}


