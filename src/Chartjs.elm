module Chartjs where

import Color exposing (Color)
import Graphics.Element exposing (Element)
import Json.Encode exposing (Value, encode)
import Native.Chartjs

showRGBA : Color -> String
showRGBA = Native.Chartjs.showRGBA

chartRaw : Int -> Int -> Value -> Element
chartRaw w h v = Native.Chartjs.chartRaw w h <| encode 0 v
