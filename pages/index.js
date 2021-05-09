import { Button, Checkbox, Form } from "semantic-ui-react";

export default function Index() {
  return (
   <div className="index">
      <div className="inner">
        <h2>썸네일 타이틀 문구를 입력해주세요!</h2>
        <Form>
          <Form.Field>
            <label>이미지 파일</label>
            <input type="file" placeholder="썸네일에 사용할 이미지를 올리세요!" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="타이틀 문구를 입력해주세요!" />
          </Form.Field>
          <Button type="submit">업로드</Button>
        </Form>
      </div>
   </div>
  )
}
