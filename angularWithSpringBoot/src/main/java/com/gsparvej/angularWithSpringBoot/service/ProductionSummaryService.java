package com.gsparvej.angularWithSpringBoot.service;

import com.gsparvej.angularWithSpringBoot.dto.*;
import com.gsparvej.angularWithSpringBoot.entity.DayWiseProduction;
import com.gsparvej.angularWithSpringBoot.entity.Order;
import com.gsparvej.angularWithSpringBoot.entity.ProductionOrder;
import com.gsparvej.angularWithSpringBoot.repository.IDayWiseProductionRepo;
import com.gsparvej.angularWithSpringBoot.repository.IProductionOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductionSummaryService {

    @Autowired
    private IProductionOrderRepo productionOrderRepo;

    @Autowired
    private IDayWiseProductionRepo dayWiseProductionRepo;

//    public List<ProductionSummaryResponseDTO> getProductionSummary() {
//        return productionOrderRepo.fetchProductionSummary();
//    }

    public ReportDTO findByOrder(Order order) {
        List<DayWiseProduction> dayWiseList = dayWiseProductionRepo.findDayWiseProductionByOrder(order);

        ReportDTO result = new ReportDTO();

        for (DayWiseProduction report : dayWiseList) {
            result.setShortSTotal(result.getShortSTotal() + report.getShortSQty());
            result.setShortMTotal(result.getShortMTotal() + report.getShortMQty());
            result.setShortLTotal(result.getShortLTotal() + report.getShortLQty());
            result.setShortXLTotal(result.getShortXLTotal() + report.getShortXLQty());

            result.setFullSTotal(result.getFullSTotal() + report.getFullSQty());
            result.setFullMTotal(result.getFullMTotal() + report.getFullMQty());
            result.setFullLTotal(result.getFullLTotal() + report.getFullLQty());
            result.setFullXLTotal(result.getFullXLTotal() + report.getFullXLQty());
        }

        return result;
    }


}
