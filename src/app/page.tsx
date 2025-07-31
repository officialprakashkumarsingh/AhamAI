"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { 
  Send, 
  Paperclip, 
  Search, 
  Brain, 
  Settings, 
  User, 
  Bot, 
  Menu,
  X,
  FileText,
  Server,
  Moon,
  Sun,
  Plus,
  MessageSquare
} from "lucide-react"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  isThinking?: boolean
}

type ChatMode = "normal" | "thinking" | "research"

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm AhamAI, your minimalistic AI assistant. How can I help you today?",
      role: "assistant",
      timestamp: new Date(),
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [chatMode, setChatMode] = useState<ChatMode>("normal")
  const [showSettings, setShowSettings] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand your message. This is a UI-only demo of AhamAI. In a real implementation, this would connect to an AI service to provide intelligent responses.",
        role: "assistant",
        timestamp: new Date(),
        isThinking: chatMode === "thinking"
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 1000)
  }

  const handleFileUpload = () => {
    // File upload functionality placeholder
    console.log("File upload triggered")
  }

  const handleWebSearch = () => {
    // Web search functionality placeholder
    console.log("Web search triggered")
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className={`flex h-screen bg-background ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold">AhamAI</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4 space-y-4">
          <Button className="w-full" onClick={() => setMessages([])}>
            <Plus className="h-4 w-4 mr-2" />
            New Chat
          </Button>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Chat Mode</h3>
            <div className="space-y-1">
              <Button
                variant={chatMode === "normal" ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setChatMode("normal")}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Normal
              </Button>
              <Button
                variant={chatMode === "thinking" ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setChatMode("thinking")}
              >
                <Brain className="h-4 w-4 mr-2" />
                Thinking Mode
              </Button>
              <Button
                variant={chatMode === "research" ? "default" : "ghost"}
                size="sm"
                className="w-full justify-start"
                onClick={() => setChatMode("research")}
              >
                <Search className="h-4 w-4 mr-2" />
                Research Model
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">MCP Servers</h3>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Server className="h-4 w-4 mr-2" />
              Manage Servers
            </Button>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Settings</h3>
            <Button variant="ghost" size="sm" className="w-full justify-start" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Authentication</h4>
                                         <div className="space-y-2">
                       <Button variant="outline" className="w-full" asChild>
                         <Link href="/auth/signin">Sign In</Link>
                       </Button>
                       <Button variant="outline" className="w-full" asChild>
                         <Link href="/auth/signup">Sign Up</Link>
                       </Button>
                     </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Preferences</h4>
                    <p className="text-sm text-muted-foreground">Chat preferences and AI model settings will be available here.</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
            <div className="hidden lg:block">
              <h2 className="text-lg font-semibold">Chat</h2>
              <p className="text-sm text-muted-foreground">
                Mode: {chatMode.charAt(0).toUpperCase() + chatMode.slice(1)}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={handleWebSearch}>
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-scroll">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-3 ${
                message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
              }`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                message.role === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted"
              }`}>
                {message.role === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              <div className={`flex-1 max-w-[70%] ${message.role === "user" ? "text-right" : ""}`}>
                <Card className={`p-3 ${
                  message.role === "user" 
                    ? "bg-primary text-primary-foreground ml-auto" 
                    : "bg-muted"
                }`}>
                  {message.isThinking && (
                    <div className="flex items-center space-x-2 mb-2 text-muted-foreground">
                      <Brain className="h-4 w-4 animate-pulse" />
                      <span className="text-xs">Thinking...</span>
                    </div>
                  )}
                  <p className="text-sm">{message.content}</p>
                </Card>
                <p className="text-xs text-muted-foreground mt-1">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <Card className="p-3 bg-muted">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">AhamAI is typing...</span>
                </div>
              </Card>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="p-4">
            <div className="flex items-end space-x-2">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Button variant="ghost" size="sm" onClick={handleFileUpload}>
                    <Paperclip className="h-4 w-4 mr-1" />
                    Upload File
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleWebSearch}>
                    <Search className="h-4 w-4 mr-1" />
                    Web Search
                  </Button>
                </div>
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="min-h-[60px] resize-none"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage()
                    }
                  }}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                size="icon"
                className="h-[60px] w-[60px]"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
