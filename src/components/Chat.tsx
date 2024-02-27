import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function Chat() {
  return (
    <Card className="w-full max-w-lg mx-auto flex flex-col">
      <CardHeader className="p-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Badge>Online</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-start space-x-4">
          <div className="flex flex-col gap-1">
            <div className="rounded-xl p-4 bg-gray-100 dark:bg-gray-800">
              Hi, I have a question about my recent order.
            </div>
          </div>
        </div>
        <div className="flex items-start justify-end space-x-4">
          <div className="flex flex-col gap-1">
            <div className="rounded-xl p-4 bg-gray-100 dark:bg-gray-800">
              Hi there! How can I assist you today?
            </div>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex flex-col gap-1">
            <div className="rounded-xl p-4 bg-gray-100 dark:bg-gray-800">
              Hello, from
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <form className="flex w-full gap-4">
          <Textarea
            className="flex-1 min-h-[40px] sm:min-h-[60px]"
            placeholder="Type a message"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
