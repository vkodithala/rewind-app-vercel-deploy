"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const JournalCard = () => {
    const apiUrl = "https://ee90-204-77-234-58.ngrok-free.app"
    fetch(apiUrl).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log("There was a problem with the request:", error);
    })

    const [isExpanded, setIsExpanded] = useState(false);
    const fullText = [["12:00", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "], ["12:01", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi "]]
    const shortText = fullText.slice(0, 75) + "..."

    
    const displayText = isExpanded ? fullText.map((line, index) => (
        <div className='flex flex-row'>
            <React.Fragment key={index}>
            <div className='justify-start'>
                <div className="flex flex-col">
                    <Badge>{ line[0] }</Badge> 
                    <p className='px-4'>&#128513;</p>
                </div>
                
            </div>
            { line[1] }
            <br />
            <br />
        </React.Fragment>
        </div>
    )) : shortText;

  return (
    <div className='p-4'>
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>9-2-23</CardTitle>
                <div class="flex flex-row">
                    <Badge variant="outline">self-realization</Badge>
                    <Badge variant="outline">anger</Badge>
                </div>
                { isExpanded ? 
                <React.Fragment>
                    <p>{displayText}</p>
                </React.Fragment> : 
                <React.Fragment>
                    <div className='flex flex-row'><div className="justify-start"><Badge>{fullText[0][0]}</Badge><p className='px-4'>&#128513;</p></div><p>{fullText[0][1]}</p></div>
                </React.Fragment>}
                                
                <Button onClick={() => setIsExpanded(!isExpanded)} variant="outline">see more</Button>
            </CardHeader>
        </Card>
    </div>
  )
}

export default JournalCard