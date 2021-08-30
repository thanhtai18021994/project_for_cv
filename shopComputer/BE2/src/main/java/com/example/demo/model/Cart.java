package com.example.demo.model;

import com.example.demo.dto.ComputerDto;
import com.example.demo.dto.MonitorDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Cart {
    private Map<ComputerDto,Integer> computers=new HashMap<>();
    private Map<MonitorDto,Integer> monitors=new HashMap<>();

    public boolean checkComputerCart(ComputerDto computer){
        for (Map.Entry<ComputerDto,Integer> item:computers.entrySet()){
            if(item.getKey().equals(computer)){
                return true;
            }
        }
        return false;
    }

    public Map.Entry<ComputerDto,Integer> selectComputerInCart(ComputerDto product){
        for (Map.Entry<ComputerDto,Integer> item:computers.entrySet()){
            if (item.getKey().equals(product)){
                return item;
            }
        }
        return null;
    }

    public void addComputer(ComputerDto product){
        if (checkComputerCart(product)){
            Map.Entry<ComputerDto,Integer> item= selectComputerInCart(product);
            Integer newQuanlity=item.getValue()+1;
            computers.replace(item.getKey(),newQuanlity);
        }else {
            computers.put(product,1);
        }
    }

    public void deleteComputer(ComputerDto product){
        computers.remove(selectComputerInCart(product).getKey());
    }
    public void changeComputer(Integer integerm, ComputerDto product){
        computers.replace(selectComputerInCart(product).getKey(),integerm);
    }
    public boolean checkMonitorCart(MonitorDto computer){
        for (Map.Entry<MonitorDto,Integer> item:monitors.entrySet()){
            if(item.getKey().equals(computer)){
                return true;
            }
        }
        return false;
    }

    public Map.Entry<MonitorDto,Integer> selectMonitorInCart(MonitorDto product){
        for (Map.Entry<MonitorDto,Integer> item:monitors.entrySet()){
            if (item.getKey().equals(product)){
                return item;
            }
        }
        return null;
    }

    public void addMonitor(MonitorDto product){
        if (checkMonitorCart(product)){
            Map.Entry<MonitorDto,Integer> item= selectMonitorInCart(product);
            Integer newQuanlity=item.getValue()+1;
            monitors.replace(item.getKey(),newQuanlity);
        }else {
            monitors.put(product,1);
        }
    }

    public void deleteMonitor(MonitorDto product){
        monitors.remove(selectMonitorInCart(product).getKey());
    }
    public void changeMonitor(Integer integerm, MonitorDto product){
        monitors.replace(selectMonitorInCart(product).getKey(),integerm);
    }
}
