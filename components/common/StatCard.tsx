// "use client"
import { Card } from "@/components/ui/card"

interface StatCardProps {
  label: string
  value: string | number
  size?: "small" | "medium" | "large"
  variant?: "default" | "light" | "lightGreen" | "lightRed" | "lightYellow"
  subText?: string
  icon?: React.ReactNode
  // UPDATED SIZE OPTIONS
  labelSize?: "sm" | "md" | "lg"
  valueSize?: "sm" | "md" | "lg" | "xl"
}

const StatCard = ({
  label,
  value,
   subText,
  icon,
  size = "medium",
  variant = "default",

  labelSize = "md",
  valueSize = "lg",
}: StatCardProps) => {

  // CARD PADDING SIZE
  const sizeClasses = {
    small: "px-8 py-6",
    medium: "px-8 py-8",
    large: "px-10 py-8",
  }

  // VALUE TEXT SIZES
  const valueSizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
    xl: "text-6xl",
  }

  // LABEL TEXT SIZES
  const labelSizeClasses = {
    sm: "text-sm",
    md: "text-xl",
    lg: "text-2xl",
  }

  // BACKGROUND VARIANTS
  const variantClasses = {
    default: "bg-white",
    light: "bg-[#f4f4ff]/60 border border-[#424794]/10 backdrop-blur-sm",
    lightGreen: "bg-[#e6f9ec]/60 border border-[#4CAF50]/10 backdrop-blur-sm",
    lightRed: "bg-[#FFECEC]/60 border border-[#F44336]/20 backdrop-blur-sm",
    lightYellow: "bg-[#FFFDE7]/60 border border-[#FDD835]/20 backdrop-blur-sm",
  }

  // LABEL COLOR
  const labelColor =
    variant === "light"
      ? "text-[#424794]/80"
      : variant === "lightGreen"
        ? "text-[#2e7d32]/80"
        : variant === "lightRed"
          ? "text-[#D32F2F]/80"
          : variant === "lightYellow"
            ? "text-[#E5A000]/80"
            : "text-muted-foreground"

  // VALUE COLOR
  const valueColor =
    variant === "light"
      ? "text-[#424794]"
      : variant === "lightGreen"
        ? "text-[#2e7d32]"
        : variant === "lightRed"
          ? "text-[#F44336]"
          : variant === "lightYellow"
            ? "text-[#FBC02D]"
            : "text-[#424794]"

  return (
    // <Card
    //   className={`
    //     ${sizeClasses[size]}
    //     ${variantClasses[variant]}
    //     rounded-lg hover:shadow-lg shadow-md transition-shadow
    //   `}
    // >
    //   <div className="flex flex-col items-center text-center">
    //   <p className={`${labelSizeClasses[labelSize]} font-bold ${labelColor}`}>
    //     {label}
    //   </p>

    //   <p className={`${valueSizeClasses[valueSize]} font-bold mt-1 ${valueColor}`} >
    //     {value}
    //   </p>
    //   </div>
    // </Card>
    <Card
  className={`
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    rounded-xl border shadow-sm hover:shadow-md transition
  `}
>
  {/* Top row */}
  <div className="flex items-start justify-between">
    <p className={`text-sm font-medium ${labelColor}`}>
      {label}
    </p>

    {icon && (
      <div className="text-muted-foreground">
        {icon}
      </div>
    )}
  </div>

  {/* Value */}
  <p className={`mt-3 ${valueSizeClasses[valueSize]} font-bold ${valueColor}`}>
    {value}
  </p>

  {/* Sub text */}
  {subText && (
    <p className="mt-1 text-sm text-muted-foreground">
      {subText}
    </p>
  )}
</Card>

  )
}

export default StatCard
