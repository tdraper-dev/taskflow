"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { LucideIcon, Plus, Edit, Trash2, Copy, Download, Upload, Share2, MoreHorizontal } from "lucide-react"

// Action type definitions
export type ActionType = 'primary' | 'secondary' | 'destructive' | 'ghost'
export type ActionSize = 'sm' | 'default' | 'lg'

export interface ClientActionProps {
  /** The action type - affects styling */
  type?: ActionType
  /** The size of the action */
  size?: ActionSize
  /** The icon to display */
  icon?: LucideIcon
  /** The action label */
  label: string
  /** Optional description */
  description?: string
  /** Click handler */
  onClick?: () => void
  /** Whether the action is disabled */
  disabled?: boolean
  /** Whether to show as a card layout */
  cardLayout?: boolean
  /** Custom className */
  className?: string
  /** Loading state */
  loading?: boolean
}

// Predefined actions for common use cases
export const ActionPresets = {
  create: { icon: Plus, label: "Create", type: "primary" as ActionType },
  edit: { icon: Edit, label: "Edit", type: "secondary" as ActionType },
  delete: { icon: Trash2, label: "Delete", type: "destructive" as ActionType },
  copy: { icon: Copy, label: "Copy", type: "ghost" as ActionType },
  download: { icon: Download, label: "Download", type: "secondary" as ActionType },
  upload: { icon: Upload, label: "Upload", type: "secondary" as ActionType },
  share: { icon: Share2, label: "Share", type: "ghost" as ActionType },
  more: { icon: MoreHorizontal, label: "More", type: "ghost" as ActionType },
}

const ClientAction = React.forwardRef<HTMLDivElement, ClientActionProps>(
  ({ 
    type = "primary",
    size = "default", 
    icon: Icon,
    label,
    description,
    onClick,
    disabled = false,
    cardLayout = false,
    className,
    loading = false,
    ...props 
  }, ref) => {
    
    const buttonVariant = type === 'destructive' ? 'destructive' : 
                         type === 'secondary' ? 'secondary' :
                         type === 'ghost' ? 'ghost' : 'default'

    // Card layout for larger action items
    if (cardLayout) {
      return (
        <Card 
          ref={ref}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md hover:scale-105",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          onClick={disabled || loading ? undefined : onClick}
          {...props}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              {Icon && (
                <div className={cn(
                  "flex items-center justify-center rounded-lg",
                  type === 'primary' && "bg-primary/10 text-primary",
                  type === 'secondary' && "bg-secondary text-secondary-foreground",
                  type === 'destructive' && "bg-destructive/10 text-destructive",
                  type === 'ghost' && "bg-muted text-muted-foreground",
                  size === 'sm' && "w-8 h-8",
                  size === 'default' && "w-10 h-10",
                  size === 'lg' && "w-12 h-12"
                )}>
                  <Icon className={cn(
                    size === 'sm' && "w-4 h-4",
                    size === 'default' && "w-5 h-5", 
                    size === 'lg' && "w-6 h-6"
                  )} />
                </div>
              )}
              <div>
                <CardTitle className={cn(
                  "text-left",
                  size === 'sm' && "text-sm",
                  size === 'default' && "text-base",
                  size === 'lg' && "text-lg"
                )}>
                  {loading ? "Loading..." : label}
                </CardTitle>
                {description && (
                  <CardDescription className="text-left mt-1">
                    {description}
                  </CardDescription>
                )}
              </div>
            </div>
          </CardHeader>
        </Card>
      )
    }

    // Button layout for inline actions
    return (
      <Button
        ref={ref}
        variant={buttonVariant}
        size={size}
        disabled={disabled || loading}
        onClick={onClick}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {loading ? "Loading..." : label}
      </Button>
    )
  }
)
ClientAction.displayName = "ClientAction"

// Convenience component for using preset actions
export interface PresetActionProps extends Omit<ClientActionProps, 'icon' | 'label' | 'type'> {
  preset: keyof typeof ActionPresets
  label?: string // Override preset label if needed
  type?: ActionType // Override preset type if needed
}

export const PresetAction = React.forwardRef<HTMLDivElement, PresetActionProps>(
  ({ preset, label, type, ...props }, ref) => {
    const presetConfig = ActionPresets[preset]
    return (
      <ClientAction
        ref={ref}
        icon={presetConfig.icon}
        label={label || presetConfig.label}
        type={type || presetConfig.type}
        {...props}
      />
    )
  }
)
PresetAction.displayName = "PresetAction"

export { ClientAction }