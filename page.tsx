"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ArrowLeft, ExternalLink, FileText, Gamepad2, MessageCircle, Users, Zap, Copy, Check } from "lucide-react"

interface Script {
  name: string
  description: string
  category: string
  status: string
  code: string
}

export default function BinzzHub() {
  const [currentView, setCurrentView] = useState<"hub" | "executors" | "scripts">("hub")
  const [selectedScript, setSelectedScript] = useState<Script | null>(null)
  const [copied, setCopied] = useState(false)

  const executorButtons = [
    {
      name: "Delta Android",
      description: "Mobile executor for Android",
      status: "Active",
      url: "https://delta.webfiles.pro/android.html",
      platform: "Android",
    },
    {
      name: "Delta iOS",
      description: "iOS version of Delta",
      status: "Active",
      url: "https://deltaexploits.gg/delta-executor-ios",
      platform: "iOS",
    },
    {
      name: "Arceus X",
      description: "Advanced Android executor",
      status: "Active",
      url: "https://www.mediafire.com/file/b3mn7i3y9yi23q0/Roblox_Arceus_X_NEO_1.7.3.apk/file",
      platform: "Android",
    },
    {
      name: "Krnl Android",
      description: "Popular Android executor",
      status: "Active",
      url: "https://krnl.cat/",
      platform: "Android",
    },
    {
      name: "Krnl iOS",
      description: "iOS version of Krnl",
      status: "Active",
      url: "https://krnl.cat/",
      platform: "iOS",
    },
    {
      name: "Codex",
      description: "Reliable Android executor",
      status: "Active",
      url: "https://codexexecutor.net/android/",
      platform: "Android",
    },
    {
      name: "Ronix",
      description: "Modern Android executor",
      status: "Active",
      url: "https://ronixstudios.com/#/download?platform=android",
      platform: "Android",
    },
  ]

  const scriptButtons: Script[] = [
    {
      name: "𝐋𝐮𝐦𝐢𝐧 𝐇𝐮𝐛",
      description: "Grow A Garden & Multi-Game Supported",
      category: "Hub",
      status: "Updated",
      code: 'loadstring(game:HttpGet("https://lumin-hub.lol/deltaloader.lua",true))()',
    },
    {
      name: "𝐑𝐨𝐧𝐢𝐱 𝐇𝐮𝐛",
      description: "Universal Game Support & Features",
      category: "Hub",
      status: "Updated",
      code: 'loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/b44706178039e9b88c4d768d4d8b012f.lua"))()',
    },
    {
      name: "𝐍𝐨𝐋𝐚𝐠 𝐇𝐮𝐛",
      description: "All Games Supported & Optimized",
      category: "Hub",
      status: "New",
      code: 'loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/NoLag-id/No-Lag-HUB/refs/heads/main/Loader/LoaderV1.lua"))()',
    },
    {
      name: "𝐓𝐡𝐮𝐧𝐝𝐞𝐫 𝐙",
      description: "Popular Games & Grow A Garden Support",
      category: "Hub",
      status: "Updated",
      code: "loadstring(game:HttpGet('https://raw.githubusercontent.com/ThundarZ/Welcome/refs/heads/main/Main/GaG/Main.lua'))()",
    },
    {
      name: "𝐒𝐩𝐞𝐞𝐝 𝐇𝐮𝐛",
      description: "Multi-Game Compatible & Fast Loading",
      category: "Hub",
      status: "Updated",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua", true))()',
    },
    {
      name: "𝐐𝐮𝐚𝐧𝐭𝐮𝐦 𝐎𝐧𝐲𝐱 𝐇𝐮𝐛",
      description: "Advanced Game Support & Features",
      category: "Hub",
      status: "New",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/flazhy/QuantumOnyx/refs/heads/main/QuantumOnyx.lua"))()',
    },
    {
      // Moved Binzz Script Main here
      name: "Binzz Script Main",
      description: "Will Add More Function Or Anything Op Bug, Binzz Community On Top!",
      category: "Main",
      status: "New",
      code: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Kiels-z/Binzz-hub/refs/heads/Lua/Project-BinzzHub", true))()',
    },
  ]

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const handleScriptClick = (script: Script) => {
    setSelectedScript(script)
    setCopied(false)
  }

  if (currentView === "executors") {
    return (
      <div className="min-h-screen animate-gradient-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" onClick={() => setCurrentView("hub")} className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hub
            </Button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">🎮 Executors</h1>
            <p className="text-gray-300">Choose your preferred executor</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {executorButtons.map((executor, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg">{executor.name}</CardTitle>
                    <div className="flex gap-2">
                      <Badge
                        variant="outline"
                        className={
                          executor.platform === "Android"
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                        }
                      >
                        {executor.platform}
                      </Badge>
                      <Badge
                        variant={executor.status === "Active" ? "default" : "secondary"}
                        className={
                          executor.status === "Active"
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        }
                      >
                        {executor.status}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">{executor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:scale-105 transition-transform"
                    disabled={executor.status === "Maintenance"}
                    onClick={() => window.open(executor.url, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Download {executor.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (currentView === "scripts") {
    return (
      <div className="min-h-screen animate-gradient-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Button variant="ghost" onClick={() => setCurrentView("hub")} className="text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Hub
            </Button>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">📜 Scripts</h1>
            <p className="text-gray-300">Premium game scripts collection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {scriptButtons.map((script, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-lg">{script.name}</CardTitle>
                    <Badge
                      variant={script.status === "New" ? "default" : "secondary"}
                      className={
                        script.status === "New"
                          ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                          : "bg-green-500/20 text-green-300 border-green-500/30"
                      }
                    >
                      {script.status}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs text-gray-400 border-gray-600 mb-2">
                    {script.category}
                  </Badge>
                  <CardDescription className="text-gray-300 text-sm">{script.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group-hover:scale-105 transition-transform"
                    onClick={() => handleScriptClick(script)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Load Script
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Dialog open={!!selectedScript} onOpenChange={() => setSelectedScript(null)}>
            <DialogContent className="bg-gray-900/95 backdrop-blur-sm border-gray-700 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-2">{selectedScript?.name}</DialogTitle>
                <DialogDescription className="text-gray-300">
                  Copy the script code below and paste it into your executor
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400 font-medium">Script Code:</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
                      onClick={() => selectedScript && copyToClipboard(selectedScript.code)}
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4 text-green-400" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="bg-black/30 rounded p-3 font-mono text-sm text-green-300 break-all">
                    {selectedScript?.code}
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-400">
                  <p>1. Copy the code above</p>
                  <p>2. Open your executor</p>
                  <p>3. Paste and execute the script</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen animate-gradient-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">Binzz</h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-6 w-6 text-purple-300" />
              <span className="text-xl text-gray-300">Community Hub</span>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Welcome To Binzz Community Website We Have Any Script, Own Script, Exe, Bypasser Bot, And Friendly Member.
          </p>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <Button
                className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white text-lg py-6 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://discord.gg/8pxh6hBBMa", "_blank")}
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Join Discord Server
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-6 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => setCurrentView("executors")}
              >
                <Gamepad2 className="mr-3 h-6 w-6" />🎮 Executors
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-6">
              <Button
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white text-lg py-6 rounded-lg transition-all duration-300 hover:scale-105"
                onClick={() => setCurrentView("scripts")}
              >
                <FileText className="mr-3 h-6 w-6" />📜 Scripts
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>Fast & Reliable</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Active Community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
