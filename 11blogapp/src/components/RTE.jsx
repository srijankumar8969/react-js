import React from 'react'
import {Controller} from "react-hook-form"
import {Editor} from "@tinymce/tinymce-react"

//a text editor in react is used to give the user the access to write the post in ehich ever manner they want and thus 

function RTE({   //try kar ke dekhna ki kya RTE hi likhna jaruri hai
    name, control, label, defaultValue = ""
}) {
  return (
    <div className='w-full'>
        {
            label && <label className='inline-block mb-1 pl-1'> {label}</label>
        }
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
            <Editor
            initialValue={defaultValue}
            init={{
                branding: false,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
            />
        )}
        />
    </div>
  )
}

export default RTE
