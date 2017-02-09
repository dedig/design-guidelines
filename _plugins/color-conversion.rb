module Jekyll
    module ColorConversion
        def rgb(input)            
            return ColorConverter.rgb(input).join(", ")
        end
            
        def cmyk(input)                        
            return "0, 0, 0, 100" if input == "000000"
            values = ColorConverter.cmyk(input)
            return values.map {|val| ((val+0.1)/5).round * 5 }.join(", ") #without adding 0.1, this rounds to lower, but we want upper limit       
        end
        
    end
end

Liquid::Template.register_filter(Jekyll::ColorConversion)